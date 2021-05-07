import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline_input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline_input"
          cols="30"
          rows="1"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
  handleChange: PropTypes.func,
};

Storyline.defaultProps = {
  storyline: '',
  handleChange: PropTypes.func,
};

export default Storyline;
