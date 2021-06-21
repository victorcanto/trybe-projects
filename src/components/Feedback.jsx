import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import { resetQuestions, resetLogin, resetScore } from '../Redux/actions';
import '../styles/feedback.css';

class Feedback extends Component {
  componentDidMount() {
    const { score, picture, name } = this.props;
    const rankingStorage = JSON.parse(localStorage.getItem('ranking'));
    const newRankingStorage = [...rankingStorage, { name, score, picture }];
    localStorage.setItem('ranking', JSON.stringify(newRankingStorage));
  }

  resetState() {
    const { resetQuestionsReducer, resetLoginReducer, resetScoreReducer } = this.props;
    resetQuestionsReducer();
    resetLoginReducer();
    resetScoreReducer();
  }

  render() {
    const lessThanThree = <h1 data-testid="feedback-text">Podia ser melhor...</h1>;
    const moreThanThree = <h1 data-testid="feedback-text">Mandou bem!</h1>;
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const numberAssertions = 3;
    return (
      <div>
        <Header />
        <div className="feedback-container">
          <div className="feedback-score-container">
            {assertions < numberAssertions ? lessThanThree : moreThanThree}
            <p>
              Pontuação:
              <span data-testid="feedback-total-score">{ score }</span>
            </p>
            <p>
              Total de acertos:
              <span data-testid="feedback-total-question">{ assertions }</span>
            </p>
          </div>
          <div className="feedback-buttons-container">
            <Link to="/">
              <button
                className="feedback_btn_next"
                onClick={ () => this.resetState() }
                type="button"
                data-testid="btn-play-again"
              >
                Jogar Novamente
              </button>
            </Link>
            <Link to="/ranking">
              <button
                className="feedback_btn_next"
                type="button"
                data-testid="btn-ranking"
              >
                Ver Ranking
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginReducer.name,
  picture: state.loginReducer.picturePath,
  score: state.scoreReducer.total,
});

const mapDispatchToProps = (dispatch) => ({
  resetQuestionsReducer: () => dispatch(resetQuestions()),
  resetLoginReducer: () => dispatch(resetLogin()),
  resetScoreReducer: () => dispatch(resetScore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  score: PropTypes.number,
  picture: PropTypes.string,
  name: PropTypes.string,
  resetQuestionsReducer: PropTypes.func,
  resetLoginReducer: PropTypes.func,
  resetScoreReducer: PropTypes.func,
}.isRequired;
