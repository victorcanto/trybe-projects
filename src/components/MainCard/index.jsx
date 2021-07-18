import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function MainCard(props) {
  const { id, index, name, thumb, currentPage } = props;
  const { pathname } = useLocation();
  const pathArea = `/comidas/${id}`;
  return (
    <Link to={ currentPage === 'area' ? pathArea : `${pathname}/${id}` }>
      <div data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ thumb }
          alt={ name }
          width="100px"
        />
        <p data-testid={ `${index}-card-name` }>{name}</p>
      </div>
    </Link>
  );
}

export default MainCard;

MainCard.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
};
