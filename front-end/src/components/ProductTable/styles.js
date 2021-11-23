import styled from 'styled-components';

const StyledProductTable = styled.table`
  td {
    border-top: 8px solid #fff;
    border-bottom: 8px solid #fff;
    padding: 0.5rem;
    text-align: left;
  }

  th {
    font-size: normal;
    font-family: sans-serif;
  }

  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  td:last-child {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
  }

  .item {
    background-color: greenyellow;
  }

  .description {
    background-color: lightgray;
  }

  .quantity {
    background-color: green;
  }

  .unit-value {
    background-color: indigo;
  }

  .sub-total {
    background-color: blue;
  }

  .remove {
    background-color: darkgreen;
  }
`;

export default StyledProductTable;
