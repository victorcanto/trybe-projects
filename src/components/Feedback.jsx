import React, { Component } from 'react';
import Header from './Header';

class Feedback extends Component {
  render() {
    const lessThanThree = <span data-testid="feedback-text">Podia ser melhor...</span>;
    const moreThanThree = <span data-testid="feedback-text">Mandou bem!</span>;
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    const numberAssertions = 3;
    return (
      <div>
        <Header />
        <h1>Tela de Feedback</h1>
        {assertions < numberAssertions ? lessThanThree : moreThanThree}
        <p data-testid="feedback-total-score">{ score }</p>
        <p data-testid="feedback-total-question">{ assertions }</p>
      </div>
    );
  }
}

export default Feedback;
