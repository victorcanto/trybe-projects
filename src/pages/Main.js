import React, { Component } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import carrinho from './carrinho.png';

class Main extends Component {
  render() {
    return (
      <div>
        <CategoryFilter/>
        <form>
          <input type="text" />
        </form>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <img src={ carrinho } alt="carrinho" />
        </Link>
      </div>

    );
  }
}

export default Main;
