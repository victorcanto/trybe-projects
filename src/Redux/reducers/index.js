import { combineReducers } from 'redux';
import loginReducer from './login';
import saveQuestions from './saveQuestions';
import scoreReducer from './score';

const rootReducer = combineReducers({
  loginReducer,
  saveQuestions,
  scoreReducer,
});

export default rootReducer;
