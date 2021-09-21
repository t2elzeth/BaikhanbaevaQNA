export interface IAnswerModel {
  answer: string,
  date_answered: string
}

export interface IQuestionModel {
  id: number,
  user: string,
  question: string,
  description: string,
  date_added: string,
  answers?: IAnswerModel
}

export interface ICreateQuestionModel {
  user: string,
  question: string,
  description: string,
}