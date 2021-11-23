import React from 'react';
import PropTypes from 'prop-types';
import StyledTableRow from './styles';
import { useProduct } from '../../../../../../../contexts/productContext';

const TableRow = ({ product, index }) => {
  const { products, setProducts } = useProduct();
  const removeProductOrder = () => {
    const updatedProduct = { ...products };
    delete updatedProduct[index];
    setProducts(updatedProduct);
  };
  const calculateSubtotal = () => Number(product.price) * Number(product.quantity);
  return (
    <StyledTableRow>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        className="item"
      >
        {index}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        className="description"
      >
        {product.name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        className="quantity"
      >
        {product.quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        className="unit-value"
      >
        {product.price}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        className="sub-total"
      >
        {calculateSubtotal()}
      </td>
      <td className="remove">
        <button
          type="button"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          onClick={ removeProductOrder }
        >
          Remover
        </button>
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
  index: PropTypes.number.isRequired,
};

export default TableRow;
