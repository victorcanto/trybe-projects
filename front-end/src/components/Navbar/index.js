import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledNavbar from './styles';

const Navbar = ({ productPath, orderPath, username }) => (
  <StyledNavbar>
    {productPath && (
      <NavLink
        data-testid="customer_products__element-navbar-link-products"
        to={ productPath }
      >
        PRODUTOS
      </NavLink>
    )}
    {orderPath && (
      <NavLink
        data-testid="customer_products__element-navbar-link-orders"
        to={ orderPath }
      >
        PEDIDOS
      </NavLink>
    )}
    <span data-testid="customer_products__element-navbar-user-full-name">
      {username}
    </span>
    <NavLink data-testid="customer_products__element-navbar-link-logout" to="/">
      Sair
    </NavLink>
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
