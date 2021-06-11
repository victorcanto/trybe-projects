import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Value from './Inputs/Value';
import Description from './Inputs/Description';
import Currency from './Inputs/Currency';
import Payment from './Inputs/Payment';
import Tag from './Inputs/Tag';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
    this.filterCurrencies = this.filterCurrencies.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  filterCurrencies(currencies) {
    return currencies.filter((currency) => currency !== 'USDT');
  }

  renderCurrencyOptions(currencies) {
    const array = this.filterCurrencies(currencies);
    return array.map((currency) => <option key={ currency }>{currency}</option>);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <Value value={ value } handleInputChange={ this.handleInputChange } />
        <Description
          description={ description }
          handleInputChange={ this.handleInputChange }
        />
        <Currency
          currencies={ currencies }
          renderCurrencyOptions={ this.renderCurrencyOptions }
          currency={ currency }
          handleInputChange={ this.handleInputChange }
        />
        <Payment method={ method } handleInputChange={ this.handleInputChange } />
        <Tag tag={ tag } handleInputChange={ this.handleInputChange } />
      </form>
    );
  }
}

export default AddExpenseForm;

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
