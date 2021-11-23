import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import StyledOrderDetails from './styles';
import ProductTable from '../../components/ProductTable';
import Navbar from '../../components/Navbar';
import Details from './components/Details';
import { requestSale } from '../../services/api';

const OrderDetails = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState('');
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState([]);

  const getSale = useCallback(
    async (token) => {
      const result = await requestSale(token, id);
      console.log(result);

      setSale(result.sale.sale);
      setProducts(result.sale.sale.products);
      setSeller(result.sale.user.name);
    },
    [id],
  );

  useEffect(() => {
    const { token } = JSON.parse(localStorage.user);
    getSale(token);
  }, [getSale]);

  return (
    <StyledOrderDetails>
      <div>
        <Navbar
          username="Mockranio"
          productPath="/customer/products"
          orderPath="/customer/orders"
        />

        <Details sale={ sale } sellerName={ seller } />

        <div className="product-table-container">
          <ProductTable page="order_details" userRole="customer" products={ products } />

          <div className="total-container">
            <span>
              { sale.total_price }
            </span>
          </div>
        </div>
      </div>
    </StyledOrderDetails>
  );
};
export default OrderDetails;
