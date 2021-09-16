import { call, put, takeEvery } from "redux-saga/effects";

// Login Redux States
import { GET_BALANCES } from "./actionTypes";
import { getBalances } from "./actions";
import axios from "axios";

//Include Both Helper File with needed methods

function* fetchBalanceRecords() {
  try {
      const response = yield call(axios.get, "http://213.139.209.59:8250/api/Balance/", {headers: {Authorization: `Token b731e4ce7c38adbb61e93cd74360530f2052dda3`}});
    yield put(getBalances(response.data));
  } catch (e) {
    console.log(e);
  }
}


function* balanceSaga() {
  yield takeEvery(GET_BALANCES, fetchBalanceRecords);
}

export default balanceSaga;
