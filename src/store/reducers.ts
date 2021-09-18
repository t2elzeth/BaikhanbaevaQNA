import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";
import questions from "./questions/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  questions
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>
