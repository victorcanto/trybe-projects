import React from 'react';
import PropTypes from 'prop-types';
import StyledTableRow from './styles';

const TableRow = ({ id, number, name, quantity, unitPrice, subTotal }) => (
  <StyledTableRow>
    <td
      data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      className="item"
    >
      {number}

    </td>
    <td
      data-testid={ `customer_checkout__element-order-table-name-${id}` }
      className="description"
    >
      {name}

    </td>
    <td
      data-testid={ `cutomer_checkout__element-order-table-quantity-${id}` }
      className="quantity"
    >
      {quantity}

    </td>
    <td
      data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      className="unit-value"
    >
      {unitPrice}

    </td>
    <td
      data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }
      className="sub-total"
    >
      {subTotal}

    </td>
    <td
      data-testid={ `customer_checkout__element-order-table-remove-${id}` }
      className="remove"
    >
      Remover

    </td>
  </StyledTableRow>
);

TableRow.propTypes = {
  id: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitPrice: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
};

export default TableRow;
