import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Payment extends Component {
  render() {
    const { method, handleInputChange } = this.props;
    return (
      <label htmlFor="payment-method">
        Método de pagamento
        <select
          name="method"
          id="payment-method"
          value={ method }
          onChange={ handleInputChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }
}

Payment.propTypes = {
  method: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
