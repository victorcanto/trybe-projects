import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './components/TableRow';
import StyledProductTable from './styles';

const ProductTable = ({ products }) => (
  <StyledProductTable>
    <tr>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Sub-total</th>
      <th>Remover Item</th>
    </tr>
    {products.map((product, index) => (
      <TableRow key={ product.id } product={ product } index={ index } />
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
};

export default ProductTable;
