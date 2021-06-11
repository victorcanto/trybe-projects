import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpenseForm from '../components/AddExpenseForm';
import { fetchCoins } from '../actions/index';
import Header from '../components/Header';

class Wallet extends React.Component {
  constructor() {
    super();

    this.addTotalValue = this.addTotalValue.bind(this);
    this.sum = this.sum.bind(this);
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
