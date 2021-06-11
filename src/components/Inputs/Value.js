import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Value extends Component {
  render() {
    const { value, handleInputChange } = this.props;
    return (
      <label htmlFor="expense-amount">
        Valor
        <input type="text" id="expense-amount" name="value" value={ value } onChange={ handleInputChange } />
      </label>
    );
  }
}

Value.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
