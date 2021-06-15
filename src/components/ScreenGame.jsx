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

  render() {
    const { index } = this.state;
    const { results } = this.props;
    return (
      <div>
        <Header />
        {results.length > 0 && <TriviaCard result={ results[index] } />}
        <button
          type="button"
          onClick={ () => this.setState((prevState) => ({
            index: prevState.index + 1,
          })) }
        >
          Proximo
        </button>
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
