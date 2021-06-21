import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { resetQuestions, resetLogin, resetScore } from '../Redux/actions';
import '../styles/ranking.css';

class Ranking extends React.Component {
  constructor() {
    super();
    this.state = {
      ranking: [],
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    const currentStorage = JSON.parse(localStorage.getItem('ranking'));
    this.updateState(currentStorage);
  }

  updateState(ranking) {
    const rankingSorted = ranking.sort((a, b) => b.score - a.score);
    this.setState({ ranking: rankingSorted });
  }

  resetState() {
    const { resetQuestionsReducer, resetLoginReducer, resetScoreReducer } = this.props;
    resetQuestionsReducer();
    resetLoginReducer();
    resetScoreReducer();
  }

  render() {
    const { ranking } = this.state;
    return (
      <>
        <div className="title-ranking">
          <h1 data-testid="ranking-title">Ranking</h1>
        </div>
        <table className="table-players">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((player, index) => (
              <tr key={ `${player.name}-${index}` }>
                <td><img src={ player.picture } alt="player" /></td>
                <td data-testid={ `player-name-${index}` }>{player.name}</td>
                <td data-testid={ `player-score-${index}` }>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="ranking-btn-container">
          <Link to="/">
            <button
              onClick={ () => this.resetState() }
              type="button"
              data-testid="btn-go-home"
              className="back-btn"
            >
              Jogar Novamente
            </button>
          </Link>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetQuestionsReducer: () => dispatch(resetQuestions()),
  resetLoginReducer: () => dispatch(resetLogin()),
  resetScoreReducer: () => dispatch(resetScore()),
});

export default connect(null, mapDispatchToProps)(Ranking);

Ranking.propTypes = {
  score: PropTypes.number,
  picture: PropTypes.string,
  name: PropTypes.string,
  resetQuestionsReducer: PropTypes.func,
  resetLoginReducer: PropTypes.func,
  resetScoreReducer: PropTypes.func,
}.isRequired;
