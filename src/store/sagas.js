import { all, fork } from "redux-saga/effects";

//public
import LayoutSaga from "./layout/saga";
import BalanceSaga from "./balance/saga";
import StatisticSaga from "./statistic/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(BalanceSaga),
    fork(StatisticSaga)
  ]);
}
