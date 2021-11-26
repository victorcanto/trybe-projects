import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useUser } from '../../contexts/userContext';
import { requestSales } from '../../services/api';
import OrderCard from './components/OrderCard';
import StyledOrders from './styles';

const customerOrdersUrl = '/customer/orders';
const customerProductsUrl = '/customer/products';
const sellerOrdersUrl = '/seller/orders';

const Orders = () => {
  const { pathname } = useLocation();
  const [orders, setOrders] = useState([]);

  const { user } = useUser();

  useEffect(() => {
    if (user && user.token) {
      const request = async () => {
        const result = await requestSales(user.token);
        setOrders(result.sales);
      };
      request();
    }
  }, [user]);

  return (
    <>
      {pathname !== sellerOrdersUrl ? (
        <Navbar
          productPath={ customerProductsUrl }
          orderPath={ customerOrdersUrl }
          username={ user.name }
        />
      ) : (
        <Navbar orderPath={ sellerOrdersUrl } username={ user.name } />
      )}
      <StyledOrders>
        {orders && orders
          .map(({
            id,
            status,
            sale_date: saleDate,
            total_price: totalPrice,
            delivery_address: deliveryAddress,
          }) => (
            <OrderCard
              key={ id }
              id={ id }
              status={ status }
              saleDate={ saleDate }
              totalPrice={ totalPrice }
              userRole={ user.role }
              deliveryAddress={ deliveryAddress }
            />
          ))}
      </StyledOrders>
    </>
  );
};

export default Orders;
