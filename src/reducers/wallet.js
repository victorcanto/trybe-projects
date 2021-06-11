import { REQUEST_COINS, RECEIVE_COINS, ADD_EXPENSE } from '../actions/actionTypes';

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
    return { ...state, currencies: Object.keys(action.payload), isFetching: false };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  default:
    return state;
  }
};

export default walletReducer;
