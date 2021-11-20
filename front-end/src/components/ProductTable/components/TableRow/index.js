import React from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledTableRow from './styles';

const TableRow = ({ data, page, userRole }) => {
  // const [, user, page] = useLocation().pathname.split('/');
  const { id, number, name, quantity, unitPrice, subTotal } = data;
  // const isDetailPage = page === 'checkout' ? page : 'order_details';
  return (
    <StyledTableRow>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-item-number-${id}` }
        className="item"
      >
        {number}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-name-${id}` }
        className="description"
      >
        {name}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-quantity-${id}` }
        className="quantity"
      >
        {quantity}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-unit-price-${id}` }
        className="unit-value"
      >
        {unitPrice}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-sub-total-${id}` }
        className="sub-total"
      >
        {subTotal}
      </td>
      {page === 'checkout' ? (
        <td
          data-testid={ `${userRole}_${page}__element-order-table-remove-${id}` }
          className="remove"
        >
          Remover
        </td>
      ) : null}
    </StyledTableRow>
  );
};

TableRow.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    number: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unitPrice: PropTypes.number,
    subTotal: PropTypes.number,
  }).isRequired,
  page: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default TableRow;
