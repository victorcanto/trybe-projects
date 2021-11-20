import React from 'react';
import ProductTable from '../../../components/ProductTable';
import AddressInfo from './components/AddressInfo';
import Navbar from '../../../components/Navbar';
import { useUser } from '../../../contexts/userContext';

const Checkout = () => {
  console.log(useUser());

  return (
    <div>
      <Navbar
        username="Mockranio"
        productPath="/customer/products"
        orderPath="/customer/orders"
      />

      <div className="product-table-container">
        <ProductTable page="checkout" userRole="customer" />

        <div className="total-container">
          <span>Total: R$28,46</span>
        </div>
      </div>

      <AddressInfo />
    </div>
  );
};

export default Checkout;
