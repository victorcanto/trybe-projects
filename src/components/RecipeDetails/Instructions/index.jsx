import React, { useContext } from 'react';
import DetailContext from '../../../context/DetailScreen/DetailContext';

function Instructions() {
  const { recipeDetails } = useContext(DetailContext);
  return (
    <div>
      <h2>Instructions</h2>
      <p data-testid="instructions">{recipeDetails.strInstructions}</p>
    </div>
  );
}

export default Instructions;
