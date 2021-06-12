import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseTable extends Component {
  render() {
    const { addExpenseToTable } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {addExpenseToTable()}
        </tbody>
      </table>
    );
  }
}

export default ExpenseTable;

ExpenseTable.propTypes = {
  addExpenseToTable: PropTypes.func.isRequired,
};
