import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import Navbar from '../../components/Navbar';
import { requestSales } from '../../services/api';
import OrderCard from './components/OrderCard';
import StyledOrders from './styles';

const customerOrdersUrl = '/customer/orders';
const sellerOrdersUrl = '/seller/orders';

const Orders = () => {
  const { pathname } = useLocation();
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const request = async () => {
      const result = await requestSales(user.token);
      setOrders(result.sales);
    };

    request();
  }, [user.token]);

  return (
    <>
      {pathname !== sellerOrdersUrl ? (
        <Navbar
          productPath={ customerOrdersUrl }
          orderPath={ customerOrdersUrl }
          username={ user.name }
        />
      ) : (
        <Navbar orderPath={ sellerOrdersUrl } username="Example username" />
      )}
      <StyledOrders>
        {orders.map(({ id, status, sale_date: saleDate, total_price: totalPrice }) => (
          <OrderCard
            key={ id }
            id={ id }
            status={ status }
            saleDate={ moment(saleDate).format('DD/MM/YY') }
            totalPrice={ totalPrice }
          />
        ))}
      </StyledOrders>
    </>
  );
};

export default Orders;
