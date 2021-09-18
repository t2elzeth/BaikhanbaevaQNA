import { ICreateQuestionAction, IReceiveCreatedQuestionAction } from "./interfaces";
import { ICreateQuestionModel, IQuestionModel } from "models/questions";
import { ActionTypesEnum } from "store/questions/actionTypes";


export const createQuestion = (payload: ICreateQuestionModel): ICreateQuestionAction =>({
  type: ActionTypesEnum.CREATE_NEW_QUESTION,
  payload
});

export const receiveCreatedQuestion = (payload: IQuestionModel): IReceiveCreatedQuestionAction => ({
  type: ActionTypesEnum.RECEIVE_CREATED_QUESTION,
  payload
});

export type Actions = ReturnType<typeof createQuestion> | ReturnType<typeof receiveCreatedQuestion>