import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { onClick, disabled, children } = this.props;
    return (
      <button
        disabled={ disabled }
        className="btn btn-success"
        type="submit"
        onClick={ onClick }
      >
        {children}

      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
