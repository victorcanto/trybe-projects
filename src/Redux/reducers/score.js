import { SUM_SCORE, RESET_SCORE } from '../actions';

const INITIAL_STATE = {
  total: 0,
};

const calcScore = (payload) => {
  let difficulty = 1;
  const mediumDifficulty = 2;
  const hardDifficulty = 3;
  if (payload.difficulty === 'medium') difficulty = mediumDifficulty;
  if (payload.difficulty === 'hard') difficulty = hardDifficulty;
  return payload.seconds * difficulty;
};

const saveLocalStorage = (score) => {
  const { player } = JSON.parse(localStorage.getItem('state'));
  const object = { player: {
    name: player.name,
    gravatarEmail: player.gravatarEmail,
    assertions: player.assertions + 1,
    score: player.score + score,
  } };

  localStorage.setItem('state', JSON.stringify(object));
};

const scoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SUM_SCORE: {
    const score = calcScore(action.payload);
    saveLocalStorage(score);
    return {
      ...state,
      total: state.total + score,
    };
  }
  case RESET_SCORE:
    return {
      ...state,
      total: 0,
    };
  default:
    return state;
  }
};

export default scoreReducer;
