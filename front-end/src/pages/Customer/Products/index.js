import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../components/Navbar';
import { useProduct } from '../../../contexts/productContext';
import { useUser } from '../../../contexts/userContext';
import { requestGetAllProducts } from '../../../services/api';
import ProductList from './components/ProductList';
import StyledTotalButton from './styles';

const Products = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  const { user } = useUser();
  const { total } = useProduct();

  function handleNavigateToCheckout() {
    history.push('/customer/checkout');
  }

  const getAllProducts = useCallback(
    async () => {
      const result = await requestGetAllProducts(user.token);

      setProducts(result);
    },
    [user.token],
  );

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <div>
      {user && (
        <>
          <Navbar
            username={ user.name }
            productPath="/customer/products"
            orderPath="/customer/orders"
          />

          <h1>Produtos</h1>
          <ProductList products={ products } />

          <StyledTotalButton
            type="button"
            disabled={ total === 0 }
            onClick={ handleNavigateToCheckout }
            data-testid="customer_products__button-cart"
            className="total"
          >
            <span
              type="button"
              data-testid="customer_products__checkout-bottom-value"
            >
              {total}
            </span>
          </StyledTotalButton>

        </>
      )}

    </div>
  );
};

export default Products;
