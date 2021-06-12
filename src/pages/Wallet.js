import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpenseForm from '../components/AddExpenseForm';
import { fetchCoins } from '../actions/index';
import Header from '../components/Header';
import ExpenseTable from '../components/ExpenseTable';

class Wallet extends React.Component {
  constructor() {
    super();

    this.addTotalValue = this.addTotalValue.bind(this);
    this.sum = this.sum.bind(this);
    this.addExpenseToTable = this.addExpenseToTable.bind(this);
    this.expenseInfo = this.expenseInfo.bind(this);
  }

  componentDidMount() {
    const { fetchCoinsProp } = this.props;
    fetchCoinsProp();
  }

  sum(acc, { value, currency, exchangeRates }) {
    return acc + (value * exchangeRates[currency].ask);
  }

  addTotalValue(expenses) {
    return expenses.reduce(this.sum, 0);
  }

  expenseInfo({ id, value, description, currency, method, tag, exchangeRates }) {
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
      </tr>
    );
  }

  addExpenseToTable() {
    const { expenses } = this.props;
    return expenses.map(this.expenseInfo);
  }

  render() {
    const loading = <span>Buscando moedas...</span>;
    const { email, currencies, isFetching, expenses } = this.props;
    return (
      <>
        <Header
          email={ email }
          expenses={ expenses }
          addTotalValue={ this.addTotalValue }
        />
        {isFetching ? loading : <AddExpenseForm currencies={ currencies } /> }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchCoinsProp: PropTypes.func.isRequired,
};
