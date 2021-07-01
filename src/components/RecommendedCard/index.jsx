import React from 'react';
import PropTypes from 'prop-types';

function RecommendedCard(props) {
  const { category, index, name, thumb } = props;
  return (
    <div data-testid={ `${index}-recomendation-card` }>
      <img src={ thumb } alt={ name } width="50%" />
      <p>{category}</p>
      <h3 data-testid={ `${index}-recomendation-title` }>{name}</h3>
    </div>
  );
}

export default RecommendedCard;

RecommendedCard.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
