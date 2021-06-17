import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  token: '',
};

const saveLocalStorage = ({ name, email }) => {
  const object = { player: {
    name,
    gravatarEmail: email,
    assertions: 0,
    score: 0,
  } };

  localStorage.setItem('state', JSON.stringify(object));
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN: {
    saveLocalStorage(action.payload);
    return {
      ...state,
      ...action.payload,
    };
  }
  default:
    return state;
  }
};

export default loginReducer;
