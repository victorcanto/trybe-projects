import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem';
import StyledProductList from './styles';

const ProductList = ({ products }) => (
  <StyledProductList>
    {products.map((product) => (
      <ProductItem product={ product } key={ product.id } />
    ))}
  </StyledProductList>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
