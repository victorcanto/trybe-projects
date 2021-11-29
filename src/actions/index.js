import {
  USER_EMAIL,
  REQUEST_COINS,
  RECEIVE_COINS,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  EDIT_EXPENSE,
} from './actionTypes';

export const userAction = (payload) => ({
  type: USER_EMAIL,
  payload,
});

export const requestCoins = () => ({
  type: REQUEST_COINS,
});

export const receiveCoins = (payload) => ({
  type: RECEIVE_COINS,
  payload,
});

export const addExpense = (payload) => ({
  type: ADD_EXPENSE,
  payload,
});

export const deleteExpense = (payload) => ({
  type: DELETE_EXPENSE,
  payload,
});

export const editExpense = (payload) => ({
  type: EDIT_EXPENSE,
  payload,
});

export const fetchCoins = () => (dispatch) => {
  dispatch(requestCoins());
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then((coins) => dispatch(receiveCoins(coins)));
};
