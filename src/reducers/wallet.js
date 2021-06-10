import { REQUEST_COINS, RECEIVE_COINS } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS:
    return { ...state, isFetching: true };
  case RECEIVE_COINS:
    return { ...state, currencies: Object.entries(action.payload), isFetching: false };
  default:
    return state;
  }
};

export default walletReducer;
