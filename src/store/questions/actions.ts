import {
  ICreateQuestionAction,
  IReceiveCreatedQuestionAction,
  IReceiveQuestionsList,
  IRequestQuestionsList
} from "./interfaces";
import { ICreateQuestionModel, IQuestionModel } from "models/questions";
import { ActionTypesEnum } from "store/questions/actionTypes";


export const createQuestion = (payload: ICreateQuestionModel): ICreateQuestionAction => ({
  type: ActionTypesEnum.CREATE_NEW_QUESTION,
  payload
});

export const receiveCreatedQuestion = (payload: IQuestionModel): IReceiveCreatedQuestionAction => ({
  type: ActionTypesEnum.RECEIVE_CREATED_QUESTION,
  payload
});

export const requestQuestionsList = (): IRequestQuestionsList => ({
  type: ActionTypesEnum.REQUEST_QUESTIONS_LIST
});

export const receiveQuestionsList = (payload: IQuestionModel[]): IReceiveQuestionsList => ({
  type: ActionTypesEnum.RECEIVE_QUESTIONS_LIST,
  payload
});

export type Actions =
  ReturnType<typeof createQuestion>
  | ReturnType<typeof receiveCreatedQuestion>
  | ReturnType<typeof requestQuestionsList>
  | ReturnType<typeof receiveQuestionsList>
