import React, { Component } from 'react';

class AddExpenseForm extends Component {
  render() {
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
            <option value="brl">BRL</option>
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
