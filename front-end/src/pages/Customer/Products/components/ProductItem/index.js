import React from 'react';
import PropTypes from 'prop-types';
import StyledProductItem from './styles';

function ProductItem({ product }) {
  return (
    <StyledProductItem>
      <img
        src={ product.url_image }
        alt={ product.name }
        width="100px"
        height="100px"
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
      />
      <span
        data-testid={ `customer_products__element-card-title-${product.id}` }
        className="product-name"
      >
        {product.name}

      </span>
      <span
        data-testid={ `customer_products__element-card-price-${product.id}` }
        className="product-price"
      >
        R$
        {product.price}
      </span>

      <div className="quantity-buttons">
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
        >
          +
        </button>

        <input
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
          value={ 0 }
        />

        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        >
          -

        </button>
      </div>

    </StyledProductItem>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape.isRequired,
};

export default ProductItem;
