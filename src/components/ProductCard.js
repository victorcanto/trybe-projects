import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class ProductCard extends Component {
  render() {
    const { item } = this.props;

    return (
      <div data-testid="product">
        <h4>{ item.title }</h4>
        <img src={ item.thumbnail } alt="imágem do produto" />
        <p>{ item.price }</p>
        <AddToCart item={ item } />
      </div>

    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ProductCard;
