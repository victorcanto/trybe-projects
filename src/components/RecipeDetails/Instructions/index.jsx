import React from 'react';
import PropTypes from 'prop-types';

function Instructions({ recipeDetails: r }) {
  return (
    <div>
      <h2>Instructions</h2>
      <p data-testid="instructions">{r.strInstructions}</p>
    </div>
  );
}

export default Instructions;

Instructions.propTypes = {
  recipeDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};
