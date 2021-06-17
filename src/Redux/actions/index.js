import { fetchTrivia } from '../../services/Api';

export const LOGIN = 'LOGIN';
export const SAVE_QUESTIONS_SUCCESS = 'SAVE_QUESTIONS_SUCCESS';
export const SAVE_QUESTIONS_ERROR = 'SAVE_QUESTIONS_ERROR';
export const SUM_SCORE = 'SUM_SCORE';
export const NEXT_INDEX = 'NEXT_INDEX';

export const loginAction = (payload) => ({
  type: LOGIN,
  payload,
});

const saveQuestionsSuccess = (payload) => ({
  type: SAVE_QUESTIONS_SUCCESS,
  payload,
});

const saveQuestionsError = (payload) => ({
  type: SAVE_QUESTIONS_ERROR,
  payload,
});

export const nextIndexAction = () => ({
  type: NEXT_INDEX,
});

export const saveQuestionsThunk = (amount, token) => async (dispatch) => {
  try {
    const results = await fetchTrivia(amount, token);
    dispatch(saveQuestionsSuccess(results));
  } catch (error) {
    dispatch(saveQuestionsError(error));
  }
};

export const loginActionThunk = (payload) => async (dispatch) => {
  dispatch(loginAction(payload));
};

export const sumScore = (payload) => ({
  type: SUM_SCORE,
  payload,
});
