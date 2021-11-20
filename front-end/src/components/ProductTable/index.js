import React from 'react';
// import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import TableRow from './components/TableRow';
import StyledProductTable from './styles';

const ProductTable = ({ page, userRole }) => {
  // const [, , page] = useLocation().pathname.split('/');
  const products = [
    {
      id: 0,
      number: 5,
      name: 'Moickão',
      quantity: 3,
      unitPrice: 1,
      subTotal: 3,
    },
    {
      id: 1,
      number: 6,
      name: 'Moick',
      quantity: 30,
      unitPrice: 2,
      subTotal: 60,
    },
  ];
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
      {products.map((product) => (
        <TableRow
          key={ product.id }
          page={ page }
          userRole={ userRole }
          data={ product }
        />
      ))}
    </StyledProductTable>
  );
};

ProductTable.propTypes = {
  page: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default ProductTable;
