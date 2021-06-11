import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { email, addTotalValue, expenses } = this.props;
    return (
      <header>
        <span style={ { marginRight: '10px' } } data-testid="email-field">
          {email}
        </span>
        <span
          data-testid="total-field"
        >
          {expenses.length !== 0 ? addTotalValue(expenses).toFixed(2) : '0.00'}
        </span>
        <span
          data-testid="header-currency-field"
        >
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  addTotalValue: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
