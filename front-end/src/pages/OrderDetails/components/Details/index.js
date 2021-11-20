import React from 'react';
import PropTypes from 'prop-types';
import SectionDetails from './styles';

const Details = ({ sale: { orderId, sellerName, saleDate, status } }) => (
  <SectionDetails>
    <span
      data-testid="customer_order_details__element-order-details-label-order-id"
    >
      { orderId }
    </span>
    <span
      data-testid="customer_order_details__element-order-details-label-seller-name"
    >
      { sellerName }
    </span>
    <span
      data-testid=" customer_order_details__element-order-details-label-order-date"
    >
      { saleDate }
    </span>
    <button
      data-testid="customer_order_details__element-order-details-label-delivery-status"
      type="button"
    >
      { status }
    </button>
    <button
      data-testid="customer_order_details__button-delivery-check"
      type="button"
    >
      Marcar como entregue
    </button>
  </SectionDetails>
);

Details.propTypes = {
  sale: PropTypes.shape({
    orderId: PropTypes.string,
    sellerName: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Details;
