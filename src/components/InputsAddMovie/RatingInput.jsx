import React from 'react';
import PropTypes from 'prop-types';

class RatingImput extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating_input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating_input"
          data-testid="rating-input"
          value={ rating }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingImput.propTypes = {
  rating: PropTypes.number,
  handleChange: PropTypes.func,
};

RatingImput.defaultProps = {
  rating: 0,
  handleChange: PropTypes.func,
};

export default RatingImput;
