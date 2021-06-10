import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
  }

  renderCurrencyOptions(currencies) {
    const array = currencies;
    // source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
    array.splice(1, 1); // remove USDT
    return array.map(([currency]) => <option key={ currency }>{currency}</option>);
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="expense-amount">
          Valor
          <input type="text" id="expense-amount" />
        </label>
        <label htmlFor="expense-description">
          Descrição
          <input type="text" id="expense-description" />
        </label>
        <label htmlFor="expense-currency">
          Moeda
          <select name="expense-currency" id="expense-currency">
            {currencies.length !== 0 && this.renderCurrencyOptions(currencies)}
          </select>
        </label>
        <label htmlFor="payment-method">
          Método de pagamento
          <select name="payment-method" id="payment-method">
            <option value="cash">Dinheiro</option>
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="select-tag">
          Tag
          <select name="select-tag" id="select-tag">
            <option value="food">Alimentação</option>
            <option value="fun">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

export default AddExpenseForm;

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.array).isRequired,
};
