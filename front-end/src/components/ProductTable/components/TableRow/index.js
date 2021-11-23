import React from 'react';
import PropTypes from 'prop-types';
import StyledTableRow from './styles';

const TableRow = ({ data, page, userRole, number }) => {
  const {
    id,
    name,
    saleProduct: { quantity },
    price,
  } = data;

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
        {price}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-sub-total-${id}` }
        className="sub-total"
      >
        {Number(quantity * price)}
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
    name: PropTypes.string,
    saleProduct: PropTypes.shape({
      quantity: PropTypes.number,
    }).isRequired,
    price: PropTypes.string,
  }).isRequired,
  number: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default TableRow;
