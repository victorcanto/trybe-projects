import { LOGIN, SET_PICTURE_PATH, RESET_LOGIN_REDUCER } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
  token: '',
  picturePath: '',
};

const saveLocalStorage = ({ name, email }) => {
  const stateObject = { player: {
    name,
    gravatarEmail: email,
    assertions: 0,
    score: 0,
  } };
  const rankingArray = JSON.parse(localStorage.getItem('ranking')) || [];
  localStorage.setItem('state', JSON.stringify(stateObject));
  localStorage.setItem('ranking', JSON.stringify(rankingArray));
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
  case SET_PICTURE_PATH:
    return {
      ...state,
      picturePath: action.payload,
    };
  case RESET_LOGIN_REDUCER:
    return {
      ...state,
      name: '',
      email: '',
      token: '',
      picturePath: '',
    };
  default:
    return state;
  }
};

export default loginReducer;
