import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <span style={ { marginRight: '10px' } } data-testid="email-field">
          {email}
        </span>
        <span data-testid="total-field">Despesa total: 0, 00</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
