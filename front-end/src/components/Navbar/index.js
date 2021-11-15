import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledNavbar from './styles';

const Navbar = ({ productPath, orderPath, username }) => (
  <StyledNavbar>
    { productPath && <NavLink to={ productPath }>PRODUTOS</NavLink>}
    { orderPath && <NavLink to={ orderPath }>PEDIDOS</NavLink>}
    <span>{username}</span>
    <NavLink to="/">Sair</NavLink>
  </StyledNavbar>
);

Navbar.defaultProps = {
  productPath: '',
};

Navbar.propTypes = {
  productPath: PropTypes.string,
  orderPath: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Navbar;
