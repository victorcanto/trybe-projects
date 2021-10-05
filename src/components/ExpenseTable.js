import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseTable extends Component {
  render() {
    const { addExpenseToTable } = this.props;
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
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
