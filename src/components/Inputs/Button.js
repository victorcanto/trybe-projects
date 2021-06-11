import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    const { addExpenses } = this.props;
    return (
      <button type="submit" onClick={ addExpenses }>Adicionar despesa</button>
    );
  }
}

Button.propTypes = {
  addExpenses: PropTypes.func.isRequired,
};
