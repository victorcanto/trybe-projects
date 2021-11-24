import styled from 'styled-components';

const StyledOrderCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  width: 90%;
  height: 15vh;
  gap: 5px;
  font-size: 1rem;
  padding: 5px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-grow: 1;
    gap: 5px;
  }

  .order-number {
    font-weight: 500;
    font-size: 0.9rem;
  }

  .order-number span {
    font-weight: 600;
  }

  .order-date, .order-total {
    background-color: var(--beer);
    border-radius: 8px;
  }

  .order-date, .order-total {
    width: 100%;
  }
`;

export default StyledOrderCard;
