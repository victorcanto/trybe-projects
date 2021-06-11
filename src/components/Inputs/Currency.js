import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Currency extends Component {
  render() {
    const { currencies, renderCurrencyOptions, currency, handleInputChange } = this.props;
    return (
      <label htmlFor="expense-currency">
        Moeda
        <select
          name="currency"
          id="expense-currency"
          value={ currency }
          onChange={ handleInputChange }
        >
          {currencies.length !== 0 && renderCurrencyOptions(currencies)}
        </select>
      </label>
    );
  }
}

Currency.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
  renderCurrencyOptions: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
