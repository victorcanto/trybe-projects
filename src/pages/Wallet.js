import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpenseForm from '../components/AddExpenseForm';
import { fetchCoins } from '../actions/index';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoinsProp } = this.props;
    fetchCoinsProp();
  }

  render() {
    const loading = <span>Buscando moedas...</span>;
    const { email, currencies, isFetching } = this.props;
    return (
      <>
        <Header email={ email } />
        {isFetching ? loading : <AddExpenseForm currencies={ currencies } /> }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsProp: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchCoinsProp: PropTypes.func.isRequired,
};
