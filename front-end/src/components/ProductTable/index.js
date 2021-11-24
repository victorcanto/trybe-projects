import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './components/TableRow';
import StyledProductTable from './styles';

const ProductTable = ({ page, userRole, products }) => (
  <StyledProductTable>
    <tr>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Sub-total</th>
      {page === 'checkout' ? <th>Remover Item</th> : null}
    </tr>
    {products.map((product, index) => (
      <TableRow
        key={ product.id }
        page={ page }
        userRole={ userRole }
        product={ product }
        orderNumber={ index }
      />
    ))}
  </StyledProductTable>
);

ProductTable.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
  userRole: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default ProductTable;
