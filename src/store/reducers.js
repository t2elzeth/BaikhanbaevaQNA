import { combineReducers } from "redux";

// Front
import Layout from "./layout/reducer";
import balance from "./balance/reducer";
import statistic from "./statistic/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  crypto,
  balance,
  statistic
});

export default rootReducer;
