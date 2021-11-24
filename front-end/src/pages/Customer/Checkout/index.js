import React from 'react';
import ProductTable from '../../../components/ProductTable';
import AddressInfo from './components/AddressInfo';
import Navbar from '../../../components/Navbar';
import { useUser } from '../../../contexts/userContext';
import StyledCheckout from './styles';
import { useProduct } from '../../../contexts/productContext';

const Checkout = () => {
  const { user } = useUser();
  const { products, total } = useProduct();

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
            <ProductTable
              products={ Object.values(products) }
              page="checkout"
              userRole="customer"
            />

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
