import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/triviaCard.css';
import { connect } from 'react-redux';
import { sumScore, clickedAnswer } from '../Redux/actions';

const correctAnswer = 'correct-answer';

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
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
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
    this.timer = setInterval(
      this.decrement, interval,
    );
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  verifyAnswers(event) {
    const { clicked } = this.props;
    const wrongAnswers = document.querySelectorAll('.wrong-answers');
    const elCorrectAnswer = document.getElementById(correctAnswer);
    elCorrectAnswer.classList.add('correct');
    wrongAnswers.forEach((button) => {
      button.classList.add('incorrect');
    });

    if (event.target.id === correctAnswer) {
      const { seconds } = this.state;
      const { saveScore, result: { difficulty } } = this.props;

      saveScore({ seconds, difficulty });
    }

    clicked();
  }

  render() {
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
      <div>
        <h1 data-testid="question-category">{category}</h1>
        <h2 data-testid="question-text">{question}</h2>
        <button
          className="questions-buttons"
          type="button"
          id="correct-answer"
          data-testid="correct-answer"
          onClick={ (e) => this.verifyAnswers(e) }
          disabled={ seconds === 0 || clicked }
        >
          {elCorrectAnswer}
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
            {answer}
          </button>
        ))}
        <p>{seconds}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveScore: (seconds) => (dispatch(sumScore(seconds))),
  clicked: () => dispatch(clickedAnswer()),
});

TriviaCard.propTypes = {
  result: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(TriviaCard);
