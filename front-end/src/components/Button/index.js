import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? 'red' : 'var(--orange)')};
  color: white;
  font-weight: 900;
  cursor: pointer;
`;

export default Button;
