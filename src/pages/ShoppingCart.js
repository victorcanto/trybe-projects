import React, { Component } from 'react';
import ShowAddToCart from '../components/ShowAddToCart';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <ShowAddToCart />
      </div>
    );
  }
}
