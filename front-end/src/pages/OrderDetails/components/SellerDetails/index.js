import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SectionDetails from './styles';

const SellerDetails = ({
  sale: { id, sale_date: saleDate, status },
  sellerName,
  userRole,
  socket,
}) => {
  const changeState = (orderState) => {
    console.log(orderState);

    console.log(`socketID de sellerDetails: ${socket.id}`);

    socket.emit('updateOrderState', { id, orderState });
  };

  return (
    <SectionDetails>
      <span
        data-testid={ `${userRole}_order_details__element-order-details-label-order-id` }
      >
        {id}
      </span>
      <span
        data-testid={
          `${userRole}_order_details__element-order-details-label-seller-name`
        }
      >
        {sellerName}
      </span>
      <span
        data-testid={
          `${userRole}_order_details__element-order-details-label-order-date`
        }
      >
        {moment(saleDate).format('DD/MM/YYYY')}
      </span>
      <span
        data-testid={
          `${userRole}_order_details__element-order-details-label-delivery-status`
        }
      >
        {status}
      </span>
      {userRole === 'customer' ? (
        <button
          data-testid={ `${userRole}_order_details__button-delivery-check` }
          disabled
          type="button"
        >
          Marcar como entregue
        </button>
      ) : (
        <>
          <button type="button" onClick={ () => changeState('preparando') }>
            Preparar pedido
          </button>
          <button type="button" onClick={ () => changeState('pendente') }>
            Saiu para entrega
          </button>
        </>
      )}
    </SectionDetails>
  );
};

SellerDetails.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  sellerName: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  socket: PropTypes.func.isRequired,
};

export default SellerDetails;
