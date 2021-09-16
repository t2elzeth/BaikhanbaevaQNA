import { RECEIVE_STATISTIC } from "./actionType";


const initialState = {
  statistic: {}
};


function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case RECEIVE_STATISTIC:
      return {...state, statistic: action.payload};
  }
}

export default reducer;