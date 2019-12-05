import React, { useState, useEffect } from "react";
import Routes from "./routes";
import { setAccessToken } from './accessToken';
import AuthenticationContext from "./context/authentication";
import { Loading } from './components/Loading';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuth] = useState(false);
  
  useEffect(() => {
    fetch(process.env.REACT_APP_REFRESH_TOKEN_API, { credentials: "include", method: "POST" })
      .then(async x => {
          const { accessToken, ok } = await x.json();
          setAuth(ok);
          setAccessToken(accessToken);
          setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      })
  }, []);

  if (loading) return <Loading />;

  return (
    <AuthenticationContext authenticated={authenticated}>
      <Routes />
    </AuthenticationContext>
  )
};

export default App;
