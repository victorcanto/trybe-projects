import React, { Component } from 'react';
import ShowAddToCart from '../components/ShowAddToCart';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    let cart = [];
    if (localStorage.getItem('item') !== null) {
      cart = JSON.parse(localStorage.getItem('item'));
    }
    this.state = { cart };
  }

  empityMessage() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        { cart.length === 0 ? this.empityMessage() : <ShowAddToCart cart={ cart } /> }
      </div>
    );
  }
}
