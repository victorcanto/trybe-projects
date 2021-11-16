import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { requestSales } from '../../services/api';
import OrderCard from './components/OrderCard';
import StyledOrders from './styles';

const customerOrdersUrl = '/customer/orders';
const sellerOrdersUrl = '/seller/orders';

const Orders = () => {
  const { pathname } = useLocation();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const request = async () => {
      const result = await requestSales();
      return result.sales && setOrders(result.sales);
    };

    request();
  }, []);

  return (
    <>
      {pathname !== sellerOrdersUrl ? (
        <Navbar
          productPath="/customer/products"
          orderPath={ customerOrdersUrl }
          username="Example username"
        />
      ) : (
        <Navbar orderPath={ sellerOrdersUrl } username="Example username" />
      )}
      <StyledOrders>
        {orders.map(({ id, status, sale_date: date }) => (
          <OrderCard key={ id } id={ id } status={ status } date={ date } />
        ))}
      </StyledOrders>
    </>
  );
};

export default Orders;
