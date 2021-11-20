import React, { useEffect, useState, useCallback } from 'react';
import StyledOrderDetails from './styles';
import ProductTable from '../../components/ProductTable';
import Navbar from '../../components/Navbar';
import Details from './components/Details';

const OrderDetails = () => {
  const [sale, setSales] = useState({});

  const getSale = useCallback(
    async () => {
      const result = await (() => ({
        orderId: 'id do pedido, salesID? delivery_number?(tabela sales?)',
        sellerName: 'Nome do vendedor(tabelas users pelo id de sales?)',
        saleDate: 'sale_date(tabela sales)',
        status: 'status da tabela sales',
        totalPrice: 'total price sales',
      }));

      setSales(result);
    },
    [],
  );

  useEffect(() => {
    getSale();
  }, [getSale]);

  return (
    <StyledOrderDetails>
      <div>
        <Navbar
          username="Mockranio"
          productPath="/customer/products"
          orderPath="/customer/orders"
        />

        <Details sale={ sale } userRole="customer" />

        <div className="product-table-container">
          <ProductTable page="order_details" />

          <div className="total-container">
            <span>
              { sale.totalPrice }
            </span>
          </div>
        </div>
      </div>
    </StyledOrderDetails>
  );
};
export default OrderDetails;
