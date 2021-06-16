import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/triviaCard.css';

class TriviaCard extends Component {
  componentDidUpdate() {
    const wrongAnswers = document.querySelectorAll('.wrong-answers');
    const correctAnswer = document.getElementById('correct-answer');
    wrongAnswers.forEach((button) => {
      button.classList.remove('incorrect');
    });
    correctAnswer.classList.remove('correct');
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
          >
            {answer}
          </button>
        ))}
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
