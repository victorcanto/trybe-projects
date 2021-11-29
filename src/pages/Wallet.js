import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpenseForm from '../components/AddExpenseForm';
import { fetchCoins, deleteExpense } from '../actions/index';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

import '../styles/wallet.css';

class Wallet extends React.Component {
  constructor() {
    super();

    this.addTotalValue = this.addTotalValue.bind(this);
    this.sum = this.sum.bind(this);
    this.addExpenseToTable = this.addExpenseToTable.bind(this);
    this.expenseInfo = this.expenseInfo.bind(this);
    this.setIsEditable = this.setIsEditable.bind(this);

    this.state = {
      isEditable: { status: false, id: '' },
    };
  }

  componentDidMount() {
    const { fetchCoinsProp } = this.props;
    fetchCoinsProp();
  }

  setIsEditable(id) {
    const { isEditable: { status } } = this.state;
    this.setState({ isEditable: { status: !status, id } });
  }

  sum(acc, { value, currency, exchangeRates }) {
    return acc + (value * exchangeRates[currency].ask);
  }

  addTotalValue(expenses) {
    return expenses.reduce(this.sum, 0);
  }

  expenseInfo({ id, value, description, currency, method, tag, exchangeRates }) {
    const { isEditable: { status } } = this.state;
    const { deleleProp } = this.props;
    return (
      <tr key={ id }>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{(exchangeRates[currency].name).split('/')[0]}</td>
        <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{(value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            className={ `btn btn-${status ? 'info' : 'warning'}` }
            type="button"
            data-testid="edit-btn"
            onClick={ () => this.setIsEditable(id) }
          >
            Editar
          </button>
          <button
            className="btn btn-danger"
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleleProp(id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }

  addExpenseToTable() {
    const { expenses } = this.props;
    return expenses.map(this.expenseInfo);
  }

  render() {
    const loading = <span>Buscando moedas...</span>;
    const { isEditable } = this.state;
    const { email, currencies, isFetching, expenses } = this.props;
    return (
      <>
        <Header
          email={ email }
          expenses={ expenses }
          addTotalValue={ this.addTotalValue }
        />
        {isFetching ? loading : <AddExpenseForm
          isEditable={ isEditable }
          currencies={ currencies }
        /> }
        <ExpenseTable addExpenseToTable={ this.addExpenseToTable } />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsProp: () => dispatch(fetchCoins()),
  deleleProp: (id) => dispatch(deleteExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchCoinsProp: PropTypes.func.isRequired,
  deleleProp: PropTypes.func.isRequired,
};
