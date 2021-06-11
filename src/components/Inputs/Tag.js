import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tag extends Component {
  render() {
    const { tag, handleInputChange } = this.props;
    return (
      <label htmlFor="select-tag">
        Tag
        <select name="tag" id="select-tag" value={ tag } onChange={ handleInputChange }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
