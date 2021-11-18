import React from 'react';
import PropTypes from 'prop-types';
import StyledTableRow from './styles';

const TableRow = ({ product }) => {
  const calculateSubtotal = () => Number(product.price) * Number(product.quantity);
  return (
    <StyledTableRow>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${product.id}` }
        className="item"
      >
        {product.id}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${product.id}` }
        className="description"
      >
        {product.name}
      </td>
      <td
        data-testid={ `cutomer_checkout__element-order-table-quantity-${product.id}` }
        className="quantity"
      >
        {product.quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${product.id}` }
        className="unit-value"
      >
        {product.price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${product.id}` }
        className="sub-total"
      >
        {calculateSubtotal()}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${product.id}` }
        className="remove"
      >
        Remover
      </td>
    </StyledTableRow>
  );
};

TableRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default TableRow;
