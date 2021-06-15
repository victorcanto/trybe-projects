import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  token: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default loginReducer;
