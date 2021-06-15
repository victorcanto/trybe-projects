import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TriviaCard extends Component {
  render() {
    const {
      result: {
        category,
        question,
        correct_answer: correctAnswer,
        incorrect_answers: incorrectAnswers,
      },
    } = this.props;
    console.log(category);
    return (
      <div>
        <h1 data-testid="question-category">{category}</h1>
        <h2 data-testid="question-text">{question}</h2>
        <button type="button" data-testid="correct-answer">{correctAnswer}</button>
        {incorrectAnswers.map((answer, index) => (
          <button type="button" data-testid={ `wrong-answer-${index}` } key={ answer }>
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
