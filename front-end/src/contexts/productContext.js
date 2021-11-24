import React, {
  createContext, useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [total, setTotal] = useState(0);

  const handleCalculateTotal = useCallback(() => {
    if (products) {
      const productsValues = Object.values(products);

      const currentTotal = productsValues.reduce((totalPrice, currentProduct) => {
        const currentProductPrice = Number(currentProduct.price);
        const currentProductQuant = Number(currentProduct.quantity);

        return totalPrice + (currentProductPrice * currentProductQuant);
      }, 0);

      setTotal(currentTotal.toFixed(2).replace(/\./, ','));
    }
  }, [products]);

  useEffect(() => {
    handleCalculateTotal();
  }, [handleCalculateTotal, products]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <ProductContext.Provider
      value={ { products, setProducts, total, setTotal } }
    >
      {children}

    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useProduct() {
  const context = useContext(ProductContext);

  return context;
}
