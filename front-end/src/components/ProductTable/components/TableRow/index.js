import React from 'react';
import PropTypes from 'prop-types';
import StyledTableRow from './styles';
import { useProduct } from '../../../../contexts/productContext';
import convertPrice from '../../../../utils/convertPrice';

const TableRow = ({ product, page, userRole, orderNumber }) => {
  const { products, setProducts } = useProduct();
  const removeProductOrder = () => {
    const updatedProduct = { ...products };
    delete updatedProduct[product.id];
    setProducts(updatedProduct);
  };

  const calculateSubtotal = () => Number(product.price * product.quantity);

  return (
    <StyledTableRow>
      <td
        data-testid={
          `${userRole}_${page}__element-order-table-item-number-${orderNumber}`
        }
        className="item"
      >
        {orderNumber + 1}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-name-${orderNumber}` }
        className="description"
      >
        {product.name}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-quantity-${orderNumber}` }
        className="quantity"
      >
        {product.quantity}
      </td>
      <td
        data-testid={
          `${userRole}_${page}__element-order-table-unit-price-${orderNumber}`
        }
        className="unit-value"
      >
        {convertPrice(product.price)}
      </td>
      <td
        data-testid={
          `${userRole}_${page}__element-order-table-sub-total-${orderNumber}`
        }
        className="sub-total"
      >
        {convertPrice(calculateSubtotal())}
      </td>
      {page === 'checkout' ? (
        <td className="remove">
          <button
            data-testid={
              `${userRole}_${page}__element-order-table-remove-${orderNumber}`
            }
            onClick={ removeProductOrder }
            type="button"
          >
            Remover
          </button>
        </td>
      ) : null}
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
  orderNumber: PropTypes.number.isRequired,
  userRole: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default TableRow;
