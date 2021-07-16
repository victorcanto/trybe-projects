import React from 'react';
import PropTypes from 'prop-types';

function BasicInfo(props) {
  const { category, name, recipe } = props;

  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipe[`str${name}Thumb`] }
        alt={ recipe[`str${name}`] }
        width="100%"
      />
      <h1 data-testid="recipe-title">{recipe[`str${name}`]}</h1>
      <p data-testid="recipe-category">{recipe[category]}</p>
    </div>
  );
}

export default BasicInfo;

BasicInfo.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recipe: PropTypes.node.isRequired,
};
