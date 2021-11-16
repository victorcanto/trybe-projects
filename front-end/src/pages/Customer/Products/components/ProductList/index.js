import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem';
import StyledProductList from './styles';

const ProductList = ({ products }) => (
  <StyledProductList>
    <h1>Produtos</h1>
    {products.map((product, index) => (
      <ProductItem product={ product } index={ index } key={ product.id } />
    ))}
  </StyledProductList>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
