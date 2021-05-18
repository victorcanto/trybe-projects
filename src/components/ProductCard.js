import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

class ProductCard extends Component {
  render() {
    const { item, itemId } = this.props;

    return (
      <div>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/product-details', itemCard: item, itemId } }
        >
          <div data-testid="product">
            <h4>{ item.title }</h4>
            <img src={ item.thumbnail } alt="imágem do produto" />
            <p>{ item.price }</p>
          </div>
        </Link>
        <AddToCart item={ item } classId="product-add-to-cart" />
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  itemId: PropTypes.string.isRequired,
};

export default ProductCard;
