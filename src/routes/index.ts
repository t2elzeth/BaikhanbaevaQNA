import Redirect from "./Redirect";
import Login from "../pages/Authentication/Login";
import Dashboard from "../pages/Dashboard/index";

import RouteNames from "./routeNames";
import IRoute from "./interfaces";
// import Questions from "../pages/Questions";
import QuestionDetail from "../pages/Questions/QuestionDetail";
import Ask from "../pages/Ask";
// import Questions from "pages/Questions";
import BlogDetails from "pages/BlogDetails";

const authProtectedRoutes: IRoute[] = [
  { path: RouteNames.DASHBOARD, component: Dashboard },
  { path: RouteNames.ROOT, exact: true, component: Redirect},
];

const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.QUESTIONS_LIST, component: BlogDetails },
  { path: RouteNames.QUESTION_DETAIL, component: QuestionDetail },
  { path: RouteNames.ASK, component: Ask },
];

export { publicRoutes, authProtectedRoutes };
