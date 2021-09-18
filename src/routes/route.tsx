import React from "react";
import { Redirect, Route } from "react-router-dom";
// import {Location} from "history";

// interface AuthmiddlewareProps {
//   component: React.ComponentType,
//
//   // Add layout type
//   layout: any,
//
//   location: Location,
//   isAuthProtected: boolean,
// }

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={props => {
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
