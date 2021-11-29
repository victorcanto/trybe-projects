import { REQUEST_COINS, RECEIVE_COINS,
  ADD_EXPENSE, DELETE_EXPENSE, EDIT_EXPENSE } from '../actions/actionTypes';

const INITIAL_STATE = {
  isFetching: false,
  currencies: [],
  expenses: [],
};

const getExpensePosition = (expenses, expenseId) => expenses
  .findIndex(({ id }) => id === expenseId);

const getEditedExpense = (expenses, payload) => {
  console.log('expenses', expenses);
  const auxExpenses = [...expenses];
  const position = getExpensePosition(expenses, payload.id);
  console.log('position', position);
  auxExpenses[position] = { id: payload.id, ...payload.data };
  console.log('auxExpenses', auxExpenses);
  return auxExpenses;
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_COINS:
    return { ...state, isFetching: true };
  case RECEIVE_COINS:
    return { ...state, currencies: Object.keys(action.payload), isFetching: false };
  case ADD_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses.filter(({ id }) => id !== action.payload)],
    };
  case EDIT_EXPENSE:
    return {
      ...state,
      expenses: getEditedExpense(state.expenses, action.payload),
    };
  default:
    return state;
  }
};

export default walletReducer;
