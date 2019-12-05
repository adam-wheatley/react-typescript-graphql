import React, { useContext } from "react";
import AuthenticationContext from "../../context/authentication/context";
import { Route, Redirect, RouteProps } from "react-router-dom";

const AuthenticatedRoute: React.FC<RouteProps> = ({
  component,
  exact,
  path,
  location
}) => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <Route
      exact={exact}
      path={path}
      component={
        isAuthenticated
          ? component
          : () => (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
      }
    />
  );
};

export default AuthenticatedRoute;
