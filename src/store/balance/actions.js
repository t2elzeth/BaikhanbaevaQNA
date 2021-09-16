import { GET_BALANCES } from "./actionTypes";


export const getBalances = (payload = []) => ({
  type: GET_BALANCES,
  payload
});