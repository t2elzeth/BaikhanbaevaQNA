import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { ActionTypesEnum } from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { Actions, receiveCreatedQuestion } from "./actions";
import { IQuestionModel } from "../../models/questions";


export function* createQuestionWorker(action: Actions) {
  try {
    const response: AxiosResponse<IQuestionModel> = yield call(axios.post, "http://localhost:8000/questions/", action.payload);
    console.log("Worker is working");
    yield put(receiveCreatedQuestion(response.data));
  } catch (e: any) {
    console.log(e.response);
  }
}


export function* watchCreateQuestion() {
    yield takeEvery(ActionTypesEnum.CREATE_NEW_QUESTION, createQuestionWorker);
}

function* questionsSaga() {
  yield all([
    fork(watchCreateQuestion)
  ]);
}

export default questionsSaga;