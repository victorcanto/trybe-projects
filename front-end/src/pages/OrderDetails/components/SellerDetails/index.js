import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SectionDetails from './styles';

const SellerDetails = ({
  sale: { id, sale_date: saleDate, status },
  sellerName,
}) => (
  <SectionDetails>
    <span data-testid="customer_order_details__element-order-details-label-order-id">
      {id}
    </span>
    <span data-testid="customer_order_details__element-order-details-label-seller-name">
      {sellerName}
    </span>
    <span data-testid="customer_order_details__element-order-details-label-order-date">
      {moment(saleDate).format('DD/MM/YYYY')}
    </span>
    <button
      data-testid="customer_order_details__element-order-details-label-delivery-status"
      type="button"
    >
      {status}
    </button>
    <button
      data-testid="customer_order_details__button-delivery-check"
      disabled
      type="button"
    >
      Marcar como entregue
    </button>
  </SectionDetails>
);

SellerDetails.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  sellerName: PropTypes.string.isRequired,
};

export default SellerDetails;
