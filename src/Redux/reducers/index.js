import { combineReducers } from 'redux';
import loginReducer from './login';
import saveQuestions from './saveQuestions';

const rootReducer = combineReducers({
  loginReducer,
  saveQuestions,
});

export default rootReducer;
