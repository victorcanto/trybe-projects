import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Currency extends Component {
  render() {
    const { currencies, renderCurrencyOptions, currency, handleInputChange } = this.props;
    return (
      <label htmlFor="expense-currency">
        Moeda
        <select
          className="form-control"
          name="currency"
          id="expense-currency"
          value={ currency }
          onChange={ handleInputChange }
        >
          {renderCurrencyOptions(currencies)}
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  renderCurrencyOptions: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
