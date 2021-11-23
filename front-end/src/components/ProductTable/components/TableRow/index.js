import React from 'react';
import PropTypes from 'prop-types';
import StyledTableRow from './styles';
import { useProduct } from '../../../../contexts/productContext';
import convertPrice from '../../../../utils/convertPrice';

const TableRow = ({ product, page, userRole, number }) => {
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
        data-testid={ `${userRole}_${page}__element-order-table-item-number-${number}` }
        className="item"
      >
        {number + 1}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-name-${number}` }
        className="description"
      >
        {product.name}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-quantity-${number}` }
        className="quantity"
      >
        {product.quantity}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-unit-price-${number}` }
        className="unit-value"
      >
        {convertPrice(product.price)}
      </td>
      <td
        data-testid={ `${userRole}_${page}__element-order-table-sub-total-${number}` }
        className="sub-total"
      >
        {convertPrice(calculateSubtotal())}
      </td>
      {page === 'checkout' ? (
        <td className="remove">
          <button
            data-testid={ `${userRole}_${page}__element-order-table-remove-${number}` }
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
  number: PropTypes.number.isRequired,
  userRole: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default TableRow;
