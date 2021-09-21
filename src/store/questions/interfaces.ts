import { ActionTypesEnum } from "./actionTypes";
import { ICreateQuestionModel, IQuestionModel } from "models/questions";


export interface ICreateQuestionAction {
  type: ActionTypesEnum.CREATE_NEW_QUESTION,
  payload?: ICreateQuestionModel
}

export interface IReceiveCreatedQuestionAction {
  type: ActionTypesEnum.RECEIVE_CREATED_QUESTION,
  payload: IQuestionModel
}

export interface IRequestQuestionsList {
  type: ActionTypesEnum.REQUEST_QUESTIONS_LIST
}

export interface IReceiveQuestionsList {
  type: ActionTypesEnum.RECEIVE_QUESTIONS_LIST,
  payload: IQuestionModel[]
}

export interface IInitialState {
  questions: IQuestionModel[],
}
