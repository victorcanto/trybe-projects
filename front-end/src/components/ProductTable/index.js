import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './components/TableRow';
import StyledProductTable from './styles';

const ProductTable = ({ page, userRole, products }) => {
  console.log(products);
  return (
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
          data={ product }
          number={ index + 1 }
        />
      ))}
    </StyledProductTable>
  );
};

ProductTable.propTypes = {
  page: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  products: PropTypes.shape([{}]).isRequired,
};

export default ProductTable;
