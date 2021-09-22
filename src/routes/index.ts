import Redirect from "./Redirect";

import RouteNames from "./routeNames";
import IRoute from "./interfaces";
// import Questions from "../pages/Questions";
import Ask from "pages/Ask";
// import Questions from "pages/Questions";
import QuestionsList from "pages/questions/QuestionsList";

const authProtectedRoutes: IRoute[] = [
  { path: RouteNames.ROOT, exact: true, component: Redirect},
];

const publicRoutes: IRoute[] = [
  { path: RouteNames.QUESTIONS_LIST, component: QuestionsList },
  { path: RouteNames.ASK, component: Ask },
];

export { publicRoutes, authProtectedRoutes };
