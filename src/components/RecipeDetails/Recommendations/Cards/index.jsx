import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Cards(props) {
  const { category, index, name, thumb, path, id } = props;
  return (
    <Link to={ `${path}/${id}` }>
      <div data-testid={ `${index}-recomendation-card` }>
        <img src={ thumb } alt={ name } />
        <p>{category}</p>
        <h3 data-testid={ `${index}-recomendation-title` }>{name}</h3>
      </div>
    </Link>
  );
}

export default Cards;

Cards.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
