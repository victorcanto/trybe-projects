import styled from 'styled-components';

const StyledProductItem = styled.div`
  border: 1px solid #c5c5c5;
  width: 10rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  margin-bottom: 2rem;

  .product-name {
    font-weight: 600;
    font-family: sans-serif;
  }

  .product-price {
    font-weight: 700;
    font-family: sans-serif;
  }

  .quantity-buttons button {
    padding: 0.2rem 0.5rem;

    margin:0 0.3rem;
    cursor: pointer;
  }

  input {
    width: 30px;
    text-align: center;
    font-weight: bold;
  }
`;

export default StyledProductItem;
