import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { ActionTypesEnum } from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { receiveCreatedQuestion, receiveQuestionsList } from "./actions";
import { IQuestionModel } from "models/questions";
import { ICreateQuestionAction } from "store/questions/interfaces";


export function* createQuestionWorker(action: ICreateQuestionAction) {
  try {
    const response: AxiosResponse<IQuestionModel> = yield call(axios.post, "http://localhost:8000/questions/", action.payload);
    console.log("Worker is working");
    yield put(receiveCreatedQuestion(response.data));
  } catch (e: any) {
    console.log(e.response);
  }
}

export function* requestQuestionWorker() {
  try {
    const response: AxiosResponse<IQuestionModel[]> = yield call(
      axios.get,
      "http://localhost:8000/questions/"
    );
    console.log(response.data);
    yield put(receiveQuestionsList(response.data));
  } catch (e: any) {
    console.log(e.response);
  }
}

export function* watchCreateQuestion() {
    yield takeEvery(ActionTypesEnum.CREATE_NEW_QUESTION, createQuestionWorker);
}

export function* watchRequestQuestionsList() {
  yield takeEvery(ActionTypesEnum.REQUEST_QUESTIONS_LIST, requestQuestionWorker);
}

function* questionsSaga() {
  yield all([
    fork(watchCreateQuestion),
    fork(watchRequestQuestionsList)
  ]);
}

export default questionsSaga;