import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import moment from 'moment';
import StyledOrderCard from './styles';
import OrderStatus from './components/OrderStatus';

const OrderCard = ({ id, status, saleDate, totalPrice, userRole, deliveryAddress }) => {
  const history = useHistory();

  const goToOrderDetails = () => {
    history.push(`/${userRole}/orders/${id}`);
  };

  const validateTotalPrice = () => `R$ ${totalPrice.replace('.', ',')}`;
  const validateSaleDate = () => `${moment(saleDate).format('DD/MM/YYYY')}`;

  return (
    <StyledOrderCard onClick={ goToOrderDetails }>
      <div
        className="order-number"
      >
        Pedido
        <span
          data-testid={ `${userRole}_orders__element-order-id-${id}` }
        >
          {id}
        </span>
      </div>
      <OrderStatus
        colorStatus={ status }
      >
        <span
          data-testid={ `${userRole}_orders__element-delivery-status-${id}` }
        >
          { status }
        </span>
      </OrderStatus>
      <div>
        <div
          className="order-date"
        >
          <span
            data-testid={ `${userRole}_orders__element-order-date-${id}` }
          >
            {validateSaleDate()}
          </span>
        </div>
        <div className="order-total">
          <span data-testid={ `${userRole}_orders__element-card-price-${id}` }>
            {validateTotalPrice()}
          </span>
        </div>
      </div>
      { userRole === 'seller' && (
        <div className="order-address">
          <span data-testid={ `seller_orders__element-card-address-${id}` }>
            {deliveryAddress}
          </span>
        </div>
      )}

    </StyledOrderCard>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  userRole: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
};

export default OrderCard;
