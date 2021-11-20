import styled from 'styled-components';

const StyledAddressInfo = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #333;

  form {
    display: flex label {
      margin: 1rem;
    }

    input,
    select {
      padding: 0.3rem;
    }

    label,
    select {
      width: 170px;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div button {
    padding: 10px 15px;
    background-color: green;

    font-weight: bold;
    color: white;

    border: 1px solid #c5c5c5;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  div button:hover {
    background-color: rgba(0, 128, 0, 0.6);
  }
`;

export default StyledAddressInfo;
