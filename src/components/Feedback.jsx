import React, { Component } from 'react';
import Header from './Header';

class Feedback extends Component {
  render() {
    const lessThanThree = <span data-testid="feedback-text">Podia ser melhor...</span>;
    const moreThanThree = <span data-testid="feedback-text">Mandou bem!</span>;
    const { player: { assertions } } = JSON.parse(localStorage.getItem('state'));
    const numberAssertions = 3;
    return (
      <div>
        <Header />
        <h1>Tela de Feedback</h1>
        {assertions < numberAssertions ? lessThanThree : moreThanThree}
      </div>
    );
  }
}

export default Feedback;
