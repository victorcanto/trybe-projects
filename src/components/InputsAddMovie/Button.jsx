import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { handleDataAndClearFields } = this.props;
    return (
      <button
        className="add_movie_btn"
        type="submit"
        data-testid="send-button"
        onClick={ handleDataAndClearFields }
      >
        Adicionar filme
      </button>
    );
  }
}

Button.propTypes = {
  handleDataAndClearFields: PropTypes.func.isRequired,
};

export default Button;
