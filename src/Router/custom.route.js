import React from "react";
import { Route as DOMRoute, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useAuth();

  console.log(!!token);

  return (
    <DOMRoute
      render={(props) =>
        isPrivate && !token ? (
          <>
            {alert("Realize o login para ter acesso a essa área")}
            <Redirect to={{ pathname: "/", ...props }} />
          </>
        ) : (
          <Component />
        )
      }
      {...rest}
    />
  );
};

export default Route;
