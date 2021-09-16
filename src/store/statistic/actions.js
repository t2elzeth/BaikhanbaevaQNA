import { RECEIVE_STATISTIC, REQUEST_STATISTIC } from "./actionType";

export const requestStatisticActionCreator = () => ({type: REQUEST_STATISTIC});
export const receiveStatisticActionCreator = (payload) => ({type: RECEIVE_STATISTIC, payload});