import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../components/Navbar';
import { useUser } from '../../../contexts/userContext';
import { requestGetAllProducts } from '../../../services/api';
import ProductList from './components/ProductList';

const Products = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  const { user } = useUser();

  const getAllProducts = useCallback(
    async () => {
      const result = await requestGetAllProducts();

      setProducts(result);
    },
    [],
  );

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [history, user]);

  return (
    <div>
      {user && (
        <>
          <Navbar
            username={ user.name }
            productPath="/customer/products"
            orderPath="/customer/cart"
          />
          <ProductList products={ products } />
        </>
      )}

    </div>
  );
};

export default Products;
