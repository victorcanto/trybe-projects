import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Description extends Component {
  render() {
    const { description, handleInputChange } = this.props;
    return (
      <label htmlFor="expense-description">
        Descrição
        <input
          className="form-control"
          type="text"
          id="expense-description"
          name="description"
          value={ description }
          onChange={ handleInputChange }
        />
      </label>
    );
  }
}

Description.propTypes = {
  description: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
