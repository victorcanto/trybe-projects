import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledNavbar from './styles';

import { useUser } from '../../contexts/userContext';

const Navbar = ({ productPath, orderPath, username }) => {
  const history = useHistory();
  const { setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    history.push('/');
  };

  return (
    <StyledNavbar>
      <div className="container-links">
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
            to={ orderPath }
            data-testid="customer_products__element-navbar-link-orders"
          >
            {orderPath.includes('customer') ? 'MEUS PEDIDOS' : 'PEDIDOS'}
          </NavLink>
        )}
      </div>
      <div>
        <span data-testid="customer_products__element-navbar-user-full-name">
          {username}
        </span>
        <button
          data-testid="customer_products__element-navbar-link-logout"
          type="button"
          onClick={ handleLogout }
        >
          Sair
        </button>
      </div>
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
