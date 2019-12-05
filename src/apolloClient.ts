import { getAccessToken, setAccessToken } from './accessToken';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink, Observable } from 'apollo-link';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';

const cache = new InMemoryCache();

const requestLink = new ApolloLink((operation, forward) =>
  new Observable(observer => {
    let handle: any;
    Promise.resolve(operation)
      .then(operation =>{
        const accessToken = getAccessToken();
        if (accessToken) {
          operation.setContext({
              headers: {
                  authorization: `Bearer ${accessToken}`
              }
          })
        }
      })
      .then(() => {
        handle = forward(operation).subscribe({
          next: observer.next.bind(observer),
          error: observer.error.bind(observer),
          complete: observer.complete.bind(observer),
        });
      })
      .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  })
);

export const client = new ApolloClient({
  link: ApolloLink.from([
    new TokenRefreshLink({
      accessTokenField: 'accessToken',
      isTokenValidOrUndefined: () => {
        const token = getAccessToken();
        if (!token) return true;
        try {
          const { exp } = jwtDecode(token);
          if (Date.now() >= exp * 1000) {
            return false
          } else {
            return true
          }
        } catch (err) {
          return false;
        }
      },
      fetchAccessToken: () => {
        return fetch(process.env.REACT_APP_REFRESH_TOKEN_API, { credentials: "include", method: "POST" })
      },
      handleFetch: accessToken => {
        setAccessToken(accessToken);
      },
      handleError: err => {
        console.warn('Your refresh token is invalid. Try to relogin');
        console.log(err);
      }
    }),
    onError(({ graphQLErrors, networkError }) => {
      console.log({ graphQLErrors, networkError });
    }),
    requestLink,
    new HttpLink({
      uri: process.env.REACT_APP_GRAPHQL_API,
      credentials: 'include'
    })
  ]),
  cache
});
