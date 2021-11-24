import styled from 'styled-components';

const OrderStatus = styled.div`
  background-color: ${({ colorStatus }) => {
    switch (colorStatus.toLowerCase()) {
    case 'pendente': return 'yellow';
    case 'preparando': return 'yellowgreen';
    default: return 'green';
    }
  }};
  border-radius: 8px;
  font-weight: 600;
`;

export default OrderStatus;
