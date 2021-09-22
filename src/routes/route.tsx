import React, { ReactElement } from "react";
import { Redirect, Route } from "react-router-dom";

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}: any): ReactElement => (
  <Route
    {...rest}
    render={(props): ReactElement => {
      if (isAuthProtected && !localStorage.getItem("authUser")) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default Authmiddleware;
