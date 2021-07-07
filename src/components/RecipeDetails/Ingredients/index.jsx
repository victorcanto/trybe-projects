import React from 'react';
import PropTypes from 'prop-types';

function Ingredients(props) {
  const { recipeDetails } = props;

  function filterIngredients([key, value]) {
    return key.includes('strIngredient')
      && (value);
  }

  function filterMeasures([key, value]) {
    return key.includes('strMeasure')
      && (!!value && value !== ' ');
  }

  function createArrOfIngredientsAndMeasures() {
    const entries = Object.entries(recipeDetails);
    const ingredients = entries.filter(filterIngredients)
      .map((el) => el[1]);
    const measures = entries.filter(filterMeasures)
      .map((el) => el[1]);

    return ingredients
      .reduce((acc, cur, index) => [...acc, [cur, measures[index]]], []);
  }

  const arrResult = createArrOfIngredientsAndMeasures();

  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {arrResult.map(([key, value], index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {!value ? key : `${key} - ${value}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;

Ingredients.propTypes = {
  recipeDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};
