import { GET_BALANCES } from "./actionTypes";

const initialState = {
  balances: []
};

 const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case GET_BALANCES:
      return {...state, balances: action.payload};
  }
};

export default reducer;