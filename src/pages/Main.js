import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import CategoryFilter from '../components/CategoryFilter';
import carrinho from './carrinho.png';
import ListItems from '../components/ListItems';
import * as api from '../services/api';
import Form from '../components/Form/Form';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      input: '',
      list: [],
    };
    this.changeState = this.changeState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  fetchAPI = async (id) => {
    let { category } = this.state;
    category = id;
    const { input } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, input);
    this.setState({
      list: response.results,
      category,
    });
  }

  changeState(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const { input, list } = this.state;
    return (
      <div>
        {/* --> Explicar para galera sobre as mudanças no componente CategoryFilter */}
        <CategoryFilter fetchAPI={ this.fetchAPI } />
        <form onSubmit={ this.handleSubmit }>
          <input
            data-testid="query-input"
            type="text"
            value={ input }
            onChange={ this.changeState }
          />
          <button
            type="submit"
            data-testid="query-button"
            onClick={ this.fetchAPI }
          >
            Pesquisar
          </button>
        </form>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
        </Link>
        <ListItems list={ list } />
        <Form />
      </div>

    );
  }
}

export default Main;
