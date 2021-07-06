import React from 'react';
import PropTypes from 'prop-types';

function BasicInfo(props) {
  const { category, name, recipeDetails: r } = props;
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ r[`str${name}Thumb`] }
        alt={ r[`str${name}`] }
        width="100%"
      />
      <h1 data-testid="recipe-title">{r[`str${name}`]}</h1>
      <p data-testid="recipe-category">{r[category]}</p>
    </div>
  );
}

export default BasicInfo;

BasicInfo.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recipeDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};
