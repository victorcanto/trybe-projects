import React from 'react';
import PropTypes from 'prop-types';

function Cards(props) {
  const { category, index, name, thumb } = props;
  return (
    <div data-testid={ `${index}-recomendation-card` }>
      <img src={ thumb } alt={ name } />
      <p>{category}</p>
      <h3 data-testid={ `${index}-recomendation-title` }>{name}</h3>
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
