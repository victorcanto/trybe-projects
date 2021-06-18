import {
  SAVE_QUESTIONS_SUCCESS, SAVE_QUESTIONS_ERROR,
  NEXT_INDEX,
  RESET_QUESTIONS_REDUCER,
} from '../actions/index';

const INITIAL_STATE = {
  index: 0,
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

  case NEXT_INDEX: {
    return {
      ...state, index: state.index + 1,
    };
  }
  case RESET_QUESTIONS_REDUCER: {
    return {
      ...state,
      index: 0,
      questions: [],
    };
  }
  default:
    return state;
  }
};

export default saveQuestionsReducer;
