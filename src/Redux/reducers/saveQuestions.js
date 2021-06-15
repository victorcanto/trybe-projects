import { SAVE_QUESTIONS_SUCCESS, SAVE_QUESTIONS_ERROR } from '../actions/index';

const INITIAL_STATE = {
  questions: [],
  error: null,
};

const saveQuestionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_QUESTIONS_SUCCESS:
    return {
      ...state,
      questions: action.payload,
    };

  case SAVE_QUESTIONS_ERROR:
    return {
      ...state,
      error: action.payload,
    };

  default:
    return state;
  }
};

export default saveQuestionsReducer;
