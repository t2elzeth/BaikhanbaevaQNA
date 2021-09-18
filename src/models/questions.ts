export interface IQuestionModel {
  id: number,
  user: string,
  title: string,
  description: string,
  date_added: string
}

export interface ICreateQuestionModel {
  user: string,
  title: string,
  description: string,
}