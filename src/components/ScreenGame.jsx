import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import TriviaCard from './TriviaCard';
import { nextIndexAction } from '../Redux/actions';

class ScreenGame extends React.Component {
  constructor() {
    super();

    this.verifyClicked = this.verifyClicked.bind(this);

    this.state = {
      clicked: false,
    };
  }

  verifyClicked(boolean) {
    this.setState({ clicked: boolean });
  }

  render() {
    const { clicked } = this.state;
    const { results, index, next } = this.props;
    return (
      <div>
        <Header />
        {results.length > 0 && (
          <TriviaCard
            verifyClicked={ this.verifyClicked }
            result={ results[index] }
          />
        )}
        {clicked && (
          <button data-testid="btn-next" type="button" onClick={ () => next() }>
            Proximo
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.saveQuestions.questions,
  index: state.saveQuestions.index,
});

const mapDispatchToProps = (dispatch) => ({
  next: () => dispatch(nextIndexAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenGame);

ScreenGame.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
};
