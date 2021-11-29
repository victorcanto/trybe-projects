import React, { useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import StyledOrderDetails from './styles';
import ProductTable from '../../components/ProductTable';
import Navbar from '../../components/Navbar';
import SellerDetails from './components/SellerDetails';
import { requestSale } from '../../services/api';
import convertPrice from '../../utils/convertPrice';

const customerOrdersUrl = '/customer/orders';
const customerProductsUrl = '/customer/products';
const sellerOrdersUrl = '/seller/orders';

const OrderDetails = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState('');
  const [sale, setSale] = useState({});
  const [products, setProducts] = useState([]);
  const [userRole, setRole] = useState('');
  const [username, setUsername] = useState('');
  const socket = io('http://localhost:3001');

  const getSale = useCallback(
    async (token) => {
      const result = await requestSale(token, id);
      console.log('product in OrderDetails', result.sale.sale.products);
      const mappedProducts = result.sale.sale.products.map(
        ({ name, saleProduct: { quantity }, price }) => ({
          name,
          quantity,
          price,
        }),
      );
      console.log('sale in OrderDetails', result.sale.sale);

      setSale(result.sale.sale);
      setProducts(mappedProducts);
      setSeller(result.sale.user.name);
    },
    [id],
  );

  useEffect(() => {
    socket.on('updateOrderState', (updatedSale) => {
      console.log('updated sale:', updatedSale);
      setSale(updatedSale);
    });
    const { token, role, name: userName } = JSON.parse(localStorage.user);
    setRole(role);
    getSale(token);
    setUsername(userName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSale]);

  return (
    <>
      {sale ? (
        <StyledOrderDetails>
          <div>
            {userRole === 'customer' ? (
              <Navbar
                productPath={ customerProductsUrl }
                orderPath={ customerOrdersUrl }
                username={ username }
              />
            ) : (
              <Navbar orderPath={ sellerOrdersUrl } username={ username } />
            )}

            <SellerDetails
              sale={ sale }
              sellerName={ seller }
              userRole={ userRole }
              socket={ socket }
            />

            <div className="product-table-container">
              <ProductTable
                page="order_details"
                userRole={ userRole }
                products={ products }
              />

              <div className="total-container">
                <span data-testid="customer_order_details__element-order-total-price">
                  {convertPrice(sale.total_price)}
                </span>
              </div>
            </div>
          </div>
        </StyledOrderDetails>
      ) : null}
      {sale ? null : 'loading...'}
    </>
  );
};
export default OrderDetails;
