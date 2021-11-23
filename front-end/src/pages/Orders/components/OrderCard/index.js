import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import moment from 'moment';
import StyledOrderCard from './styles';
import OrderStatus from './components/OrderStatus';

const OrderCard = ({ id, status, saleDate, totalPrice }) => {
  const history = useHistory();

  const goToOrderDetails = () => {
    history.push(`/customer/orders/${id}`);
  };

  const validateTotalPrice = () => `R$ ${totalPrice.replace('.', ',')}`;
  const validateSaleDate = () => `${moment(saleDate).format('DD/MM/YY')}`;

  return (
    <StyledOrderCard onClick={ goToOrderDetails }>
      <div
        className="order-number"
      >
        Pedido
        <span
          data-testid={ `customer_orders__element-order-id-${id}` }
        >
          000
          {id}

        </span>

      </div>
      <OrderStatus
        colorStatus={ status }
      >
        <span
          data-testid={ `customer_orders__element-delivery-status-${id}` }
        >
          { status }

        </span>

      </OrderStatus>
      <div>
        <div
          className="order-date"
        >
          <span
            data-testid={ `customer_orders__element-order-date-${id}` }
          >
            {validateSaleDate()}

          </span>

        </div>
        <div className="order-total">
          {validateTotalPrice()}
        </div>
      </div>

    </StyledOrderCard>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default OrderCard;
