import React, { useContext } from "react";
import AuthenticationContext from "../../context/authentication/context";
import { Route, Redirect, RouteProps } from "react-router-dom";

const UnauthenticatedRoute: React.FC<RouteProps> = ({
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
          ? () => (
            <Redirect
              to={{
                pathname: "/dashboard",
                state: { from: location }
              }}
            />
          )
          : component
      }
    />
  );
};

export default UnauthenticatedRoute;
