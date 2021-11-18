import styled from 'styled-components';

const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 2rem;

  h1 {
    font-family: sans-serif;
  }

  @media(max-width: 500px) {
    grid-template-columns: 1fr;
    margin: 15%;
  }
`;

export default StyledProductList;
