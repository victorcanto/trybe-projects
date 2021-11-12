import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StyledButtonLink from './styles';

const ButtonLink = ({ children, url }) => (
  <StyledButtonLink data-testid="common_login__button-register">
    <Link to={ url }>
      {children}
    </Link>
  </StyledButtonLink>
);

export default ButtonLink;

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
