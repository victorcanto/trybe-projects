import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem = () => {
    let cart = [];
    const { item } = this.props;
    if (localStorage.getItem('item') !== null) {
      cart = JSON.parse(localStorage.getItem('item'));
      cart.push(item);
    } else {
      cart.push(item);
    }
    localStorage.setItem('item', JSON.stringify(cart));
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ () => this.addItem() }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};
