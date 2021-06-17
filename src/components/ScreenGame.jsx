import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import TriviaCard from './TriviaCard';

class ScreenGame extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };
  }

  renderNextBtn() {
    return (
      <button
        data-testid="btn-next"
        type="button"
        onClick={ () => this.setState((prevState) => ({
          index: prevState.index + 1,
        })) }
      >
        Proximo
      </button>
    );
  }

  render() {
    const { index } = this.state;
    const { results, clicked } = this.props;
    return (
      <div>
        <Header />
        {results.length > 0 && <TriviaCard
          result={ results[index] }
        />}
        { clicked && this.renderNextBtn() }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.saveQuestions.questions,
  clicked: state.scoreReducer.clicked,
});

export default connect(mapStateToProps)(ScreenGame);

ScreenGame.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  clicked: PropTypes.bool.isRequired,
};
