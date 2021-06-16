import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/triviaCard.css';

class TriviaCard extends Component {
  constructor() {
    super();

    this.state = {
      seconds: 30,
    };

    this.decrement = this.decrement.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    const wrongAnswers = document.querySelectorAll('.wrong-answers');
    const correctAnswer = document.getElementById('correct-answer');
    wrongAnswers.forEach((button) => {
      button.classList.remove('incorrect');
    });
    correctAnswer.classList.remove('correct');

    if (prevProps !== this.props) {
      this.resetTimer();
      this.stopTimer();
      this.startTimer();
    }
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

  verifyAnswers() {
    const wrongAnswers = document.querySelectorAll('.wrong-answers');
    const correctAnswer = document.getElementById('correct-answer');
    correctAnswer.classList.add('correct');
    wrongAnswers.forEach((button) => {
      button.classList.add('incorrect');
    });
  }

  render() {
    const {
      result: {
        category,
        question,
        correct_answer: correctAnswer,
        incorrect_answers: incorrectAnswers,
      },
    } = this.props;
    const { seconds } = this.state;

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
          disabled={ seconds === 0 }
        >
          {correctAnswer}
        </button>
        {incorrectAnswers.map((answer, index) => (
          <button
            className="wrong-answers"
            type="button"
            data-testid={ `wrong-answer-${index}` }
            key={ answer }
            onClick={ (e) => this.verifyAnswers(e) }
            disabled={ seconds === 0 }
          >
            {answer}
          </button>
        ))}
        <p>{seconds}</p>
      </div>
    );
  }
}

TriviaCard.propTypes = {
  result: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
  }),
}.isRequired;
export default TriviaCard;
