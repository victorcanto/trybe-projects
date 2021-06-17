import React, { Component } from 'react';
import { connect } from 'react-redux';

// const lessThanThree = 'Podia ser melhor...';
// const moreThanThree = 'Mandou bem!';
// const { player: { assertions } } = JSON.parse(localStorage.getItem('state'))

class Feedback extends Component {
  render() {
    return (
      <div>
        {/* <h1 data-testid="feedback-text">Tela de Feedback</h1>
        {assertions < 3 ? moreThanThree : lessThanThree} */}
      </div>
    );
  }
}

export default connect()(Feedback);
