import { call, put, takeEvery } from "redux-saga/effects";
import { REQUEST_STATISTIC } from "./actionType";
import axios from "axios";
import { receiveStatisticActionCreator } from "./actions";


function* requestStatisticWorker() {
  try {
    const response = yield call(axios.get, "http://213.139.209.59:8250/api/Statistic/");
    yield put(receiveStatisticActionCreator(response.data));
  } catch (e) {
    console.log(e);
  }
}


function* saga() {
  yield takeEvery(REQUEST_STATISTIC, requestStatisticWorker);
}

export default saga;