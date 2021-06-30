import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function MainCard(props) {
  const { id, name, thumb } = props;
  const { pathname } = useLocation();
  return (
    <Link to={ `${pathname}/${id}` }>
      <div>
        <img src={ thumb } alt={ name } width="100px" />
        <p>{name}</p>
      </div>
    </Link>

  );
}

export default MainCard;

MainCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
