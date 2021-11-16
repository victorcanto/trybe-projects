import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledNavbar from './styles';

import { useUser } from '../../contexts/userContext';

const Navbar = ({ productPath, orderPath, username }) => {
  const { setUser } = useUser();

  function handleLogout() {
    localStorage.removeItem('user');

    setUser(null);
  }

  return (

    <StyledNavbar>
      { productPath && (
        <NavLink
          data-testid="customer_products__element-navbar-link-products"
          to={ productPath }
        >
          PRODUTOS
        </NavLink>)}
      { orderPath && (
        <NavLink
          to={ orderPath }
          data-testid="customer_products__element-navbar-link-orders"
        >
          PEDIDOS
        </NavLink>
      )}
      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {username}

      </span>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ handleLogout }
      >
        Sair
      </button>

    </StyledNavbar>
  );
};

Navbar.defaultProps = {
  productPath: '',
};

Navbar.propTypes = {
  productPath: PropTypes.string,
  orderPath: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default Navbar;
