import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/TriviaCard.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FcAlarmClock } from 'react-icons/fc';
import { sumScore } from '../Redux/actions';

const correctAnswer = 'correct-answer';
const questionLength = 5;

class TriviaCard extends Component {
  constructor() {
    super();

    this.state = {
      seconds: 30,
      clicked: false,
    };

    this.decrement = this.decrement.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.updateClicked = this.updateClicked.bind(this);
    this.renderTimer = this.renderTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    const { questionIndex } = this.props;
    if (questionIndex === questionLength) return;
    if (prevProps !== this.props) {
      const wrongAnswers = document.querySelectorAll('.wrong-answers');
      const elCorrectAnswer = document.getElementById(correctAnswer);
      wrongAnswers.forEach((button) => {
        button.classList.remove('incorrect');
      });
      elCorrectAnswer.classList.remove('correct');

      this.resetTimer();
      this.stopTimer();
      this.startTimer();
      this.updateClicked();

      const { verifyClicked } = this.props;
      verifyClicked(false);
    }
  }

  updateClicked() {
    this.setState({
      clicked: false,
    });
  }

  resetTimer() {
    this.setState({
      seconds: 30,
    });
  }

  decrement() {
    const { seconds } = this.state;
    if (seconds === 0) {
      this.stopTimer();
    } else {
      this.setState((previousState) => ({
        seconds: previousState.seconds - 1,
      }));
    }
  }

  startTimer() {
    const interval = 1000;
    this.timer = setInterval(this.decrement, interval);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  verifyAnswers(event) {
    const { verifyClicked } = this.props;
    verifyClicked(true);
    const wrongAnswers = document.querySelectorAll('.wrong-answers');
    const elCorrectAnswer = document.getElementById(correctAnswer);
    elCorrectAnswer.classList.add('correct');
    wrongAnswers.forEach((button) => {
      button.classList.add('incorrect');
    });

    if (event.target.id === correctAnswer) {
      const { seconds } = this.state;
      const {
        saveScore,
        result: { difficulty },
      } = this.props;

      saveScore({ seconds, difficulty });
    }

    this.setState({
      clicked: true,
    });
  }

  renderTimer(seconds) {
    const { verifySeconds } = this.props;
    if (seconds !== 0) {
      verifySeconds(false);
      return (<p>{`Tempo restante: ${seconds}s`}</p>);
    }
    verifySeconds(true);
    return (
      <div className="timer_alert">
        Seu tempo acabou...
        <FcAlarmClock className="alarm_clock" />
      </div>);
  }

  render() {
    const { questionIndex } = this.props;
    if (questionIndex === questionLength) return <Redirect to="/feedback" />;
    const {
      result: {
        category,
        question,
        correct_answer: elCorrectAnswer,
        incorrect_answers: incorrectAnswers,
      },
    } = this.props;
    const { seconds, clicked } = this.state;

    return (
      <div className="card_container">
        <h1 data-testid="question-category">{window.atob(category)}</h1>
        <h2 data-testid="question-text">{window.atob(question)}</h2>
        <button
          className="questions-buttons"
          type="button"
          id="correct-answer"
          data-testid="correct-answer"
          onClick={ (e) => this.verifyAnswers(e) }
          disabled={ seconds === 0 || clicked }
        >
          {window.atob(elCorrectAnswer)}
        </button>
        {incorrectAnswers.map((answer, index) => (
          <button
            className="wrong-answers"
            type="button"
            data-testid={ `wrong-answer-${index}` }
            key={ answer }
            onClick={ (e) => this.verifyAnswers(e) }
            disabled={ seconds === 0 || clicked }
          >
            {window.atob(answer)}
          </button>
        ))}

        {this.renderTimer(seconds)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionIndex: state.saveQuestions.index,
});

const mapDispatchToProps = (dispatch) => ({
  saveScore: (seconds) => dispatch(sumScore(seconds)),
});

TriviaCard.propTypes = {
  result: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
  }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(TriviaCard);
