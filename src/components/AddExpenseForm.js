import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Value from './Inputs/Value';
import Description from './Inputs/Description';
import Currency from './Inputs/Currency';
import Payment from './Inputs/Payment';
import Tag from './Inputs/Tag';
import Button from './Inputs/Button';
import { addExpense, editExpense } from '../actions/index';
import fetchExchangeRates from '../services/API';

class AddExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
    this.filterCurrencies = this.filterCurrencies.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleExpense = this.handleExpense.bind(this);
    this.clearInputData = this.clearInputData.bind(this);

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

  clearInputData() {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleExpense(type, callback, expenseId) {
    return async () => {
      const { id, ...data } = this.state;

      const exchangeRates = await fetchExchangeRates();

      this.setState({
        exchangeRates,
      });

      if (type === 'add') {
        callback({ id, ...data, exchangeRates });

        this.setState((prevState) => ({
          id: prevState.id + 1,
        }));
      } else {
        callback({ id: expenseId, data: { ...data, exchangeRates } });
      }

      this.clearInputData();
    };
  }

  filterCurrencies(currencies) {
    return currencies.filter((currency) => currency !== 'USDT');
  }

  renderCurrencyOptions(currencies) {
    const array = this.filterCurrencies(currencies);
    return array.map((currency) => <option key={ currency }>{currency}</option>);
  }

  render() {
    const { currencies, isEditable: { status, id }, add, edit } = this.props;
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
        <Button
          disabled={ !(value.length && description.length) }
          onClick={ status
            ? this.handleExpense('edit', edit, id) : this.handleExpense('add', add) }
        >
          {status ? 'Editar despesa' : 'Adicionar despesa'}
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (expense) => dispatch(addExpense(expense)),
  edit: (expense) => dispatch(editExpense(expense)),
});

export default connect(null, mapDispatchToProps)(AddExpenseForm);

AddExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  add: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  isEditable: PropTypes.bool.isRequired,
};
