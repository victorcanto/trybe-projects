import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import TriviaCard from './TriviaCard';

class ScreenGame extends React.Component {
  constructor() {
    super();

    this.verifyClicked = this.verifyClicked.bind(this);

    this.state = {
      index: 0,
      clicked: false,
    };
  }

  verifyClicked() {
    this.setState({ clicked: true });
  }

  render() {
    const { index, clicked } = this.state;
    const { results } = this.props;
    return (
      <div>
        <Header />
        {results.length > 0 && <TriviaCard
          verifyClicked={ this.verifyClicked }
          result={ results[index] }
        />}
        {clicked && (
          <button
            data-testid="btn-next"
            type="button"
            onClick={ () => this.setState((prevState) => ({
              index: prevState.index + 1,
            })) }
          >
            Proximo
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.saveQuestions.questions,
});

export default connect(mapStateToProps)(ScreenGame);

ScreenGame.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
