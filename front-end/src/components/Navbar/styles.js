import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;
  width: 100vw;
  height: 10vh;
  background-color: var(--dark-gray);

  .container-links {
    display: flex;
    flex-direction: column;
    a {
      color: white;
    }
    
    a:hover {
      color: var(--orange);
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  span {
    color: white;
  }

  button {
    background-color: var(--orange);
    color: black;
  }
`;

export default StyledNavbar;
