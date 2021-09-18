import { all, fork } from "redux-saga/effects";

//public
import LayoutSaga from "./layout/saga";
import questionsSaga from "@/store/questions/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(questionsSaga)
  ]);
}
