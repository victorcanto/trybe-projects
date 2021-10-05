import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Value from './Inputs/Value';
import Description from './Inputs/Description';
import Currency from './Inputs/Currency';
import Payment from './Inputs/Payment';
import Tag from './Inputs/Tag';
import Button from './Inputs/Button';
import { addExpense } from '../actions/index';
import fetchExchangeRates from '../services/API';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
    this.filterCurrencies = this.filterCurrencies.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addExpenses = this.addExpenses.bind(this);

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  async addExpenses() {
    const { add } = this.props;
    const exchangeRates = await fetchExchangeRates();

    this.setState({
      exchangeRates,
    });

    add(this.state);

    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
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
      <form className="form-inline wallet-form" onSubmit={ this.handleSubmit }>
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
        <Button addExpenses={ this.addExpenses } />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(AddExpenseForm);

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  add: PropTypes.func.isRequired,
};
