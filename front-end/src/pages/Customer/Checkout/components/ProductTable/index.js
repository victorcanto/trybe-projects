import React from 'react';
import TableRow from './components/TableRow';
import StyledProductTable from './styles';

const ProductTable = () => (
  <StyledProductTable>
    <tr>
      <th>Item</th>
      <th>Descrição</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Sub-total</th>
      <th>Remover Item</th>
    </tr>
    <TableRow />
  </StyledProductTable>
);

export default ProductTable;
