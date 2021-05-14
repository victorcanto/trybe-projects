import React, { Component } from 'react';
import ListItems from '../components/ListItems';
import * as api from '../services/api';

export default class Main extends Component {
  constructor(props) {
    super(props);

    // const { category } = this.props;

    this.state = {
      category: '',
      input: '',
      list: [],
    };
    this.changeState = this.changeState.bind(this);
  }

  fetchAPI = async () => {
    const { category, input } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(category, input);
    this.setState({
      list: response.results,
    });
  }

  changeState(event) {
    this.setState({
      input: event.target.value,
    });
  }

  render() {
    const { input, list } = this.state;

    console.log(list);
    return (
      <div>
        <form>
          <input
            data-testid="query-input"
            type="text"
            value={ input }
            onChange={ this.changeState }
          />
          <button
            type="button"
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
        <ListItems list={ list } />
      </div>

    );
  }
}
