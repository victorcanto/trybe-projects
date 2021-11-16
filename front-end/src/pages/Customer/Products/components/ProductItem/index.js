import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StyledProductItem from './styles';

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(0);

  function formatPrice(price) {
    return price.replace(/\./, ',');
  }

  function decreaseQuantity() {
    if (quantity !== 0) { setQuantity(Number(quantity) - 1); }
  }

  function increaseQuantity() {
    setQuantity(Number(quantity) + 1);
  }

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
        {formatPrice(product.price)}
      </span>

      <div className="quantity-buttons">
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
          onClick={ increaseQuantity }
        >
          +
        </button>

        <input
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
          value={ quantity }
          onChange={ (event) => setQuantity(event.target.value) }
        />

        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          onClick={ decreaseQuantity }
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
