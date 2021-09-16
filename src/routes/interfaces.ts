import RouteNames from "./routeNames";
import React from "react";

interface IRoute {
  path: RouteNames,
  exact?: boolean,
  component: React.ComponentType
}

export default IRoute;