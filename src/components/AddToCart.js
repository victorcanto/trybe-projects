import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  addItem = () => {
    const { item } = this.props;
    localStorage.setItem('item', item.title);
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
