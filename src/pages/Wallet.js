import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddExpenseForm from '../components/AddExpenseForm';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <>
        <header>
          <span style={ { marginRight: '10px' } } data-testid="email-field">
            {email}
          </span>
          <span data-testid="total-field">Despesa total: 0, 00</span>
          <span data-testid="header-currency-field">BRL</span>
        </header>
        <AddExpenseForm />
      </>
    );
  }
}

const mapStateToProps = ({ user: { email } }) => ({
  email,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};
