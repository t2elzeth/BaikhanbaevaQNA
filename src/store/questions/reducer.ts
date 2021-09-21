import { IInitialState } from "./interfaces";
import { ActionTypesEnum } from "./actionTypes";
import { Actions } from "./actions";


const initialState: IInitialState = {
  questions: []
};


export default function reducer(state = initialState, action: Actions): IInitialState {
  switch (action.type) {
    default:
      return state;

    case ActionTypesEnum.RECEIVE_CREATED_QUESTION:
      return {...state, questions: [...state.questions, action.payload]};

    case ActionTypesEnum.RECEIVE_QUESTIONS_LIST:
      return {...state, questions: action.payload};
  }
}