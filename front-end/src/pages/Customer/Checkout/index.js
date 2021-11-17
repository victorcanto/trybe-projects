import React from 'react';
import ProductTable from './components/ProductTable';
import AddressInfo from './components/AddressInfo';
import Navbar from '../../../components/Navbar';

const Checkout = () => (
  <div>
    <Navbar />

    <div className="product-table-container">
      <ProductTable />

      <div className="total-container">
        <span>Total: R$28,46</span>
      </div>
    </div>

    <AddressInfo />

  </div>
);

export default Checkout;
