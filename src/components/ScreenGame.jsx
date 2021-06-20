import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import TriviaCard from './TriviaCard';
import { nextIndexAction } from '../Redux/actions';
import '../styles/ScreenGame.css';

class ScreenGame extends React.Component {
  constructor() {
    super();

    this.verifyClicked = this.verifyClicked.bind(this);
    this.verifySeconds = this.verifySeconds.bind(this);

    this.state = {
      clicked: false,
      conditionTime: false,
    };
  }

  verifyClicked(boolean) {
    this.setState({ clicked: boolean });
  }

  verifySeconds(boolean) {
    this.setState({ conditionTime: boolean });
  }

  render() {
    const { clicked, conditionTime } = this.state;
    const { results, index, next } = this.props;
    return (
      <div className="game_container">
        <Header />
        {results.length > 0 && (
          <TriviaCard
            verifySeconds={ this.verifySeconds }
            verifyClicked={ this.verifyClicked }
            result={ results[index] }
          />
        )}
        <div className="game_btn_next_container">
          {(clicked || conditionTime) && (
            <button
              className="game_btn_next"
              data-testid="btn-next"
              type="button"
              onClick={ () => next() }
            >
              Próxima pergunta
            </button>
          )}
        </div>

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
