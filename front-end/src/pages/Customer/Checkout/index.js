import React from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react/cjs/react.development';
import ProductTable from '../../../components/ProductTable';
import AddressInfo from './components/AddressInfo';
import Navbar from '../../../components/Navbar';
import { useUser } from '../../../contexts/userContext';
import StyledCheckout from './styles';
import { useProduct } from '../../../contexts/productContext';

const Checkout = () => {
  const history = useHistory();
  const { user } = useUser();
  const { products, total } = useProduct();

  useEffect(() => {
    if (!user) {
      history.push('/login');
    }
  }, [history, user]);

  return (
    <StyledCheckout>
      {user && user.name && (
        <>
          <Navbar
            productPath="/customer/products"
            orderPath="/customer/orders"
            username={ user.name }
          />

          <div className="product-table-container">
            <ProductTable products={ products } />

            <div className="total-container">
              <span>
                Total: R$
                <span data-testid="customer_checkout__element-order-total-price">
                  {total}
                </span>
              </span>
            </div>
          </div>

          <AddressInfo />
        </>
      )}
    </StyledCheckout>
  );
};

export default Checkout;
