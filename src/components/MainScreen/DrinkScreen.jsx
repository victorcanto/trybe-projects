import React, { } from 'react';
import MainCard from './MainCard';
import useCategories from '../../hooks/useCategories';
import useRecipes from '../../hooks/useRecipes';

const dataForDrinkApi = {
  domain: 'thecocktaildb',
  name: 'drinks',
  qtdC: 5,
  qtdR: 12,
};

function DrinkScreen() {
  const recipes = useRecipes(dataForDrinkApi);
  const categories = useCategories(dataForDrinkApi);

  function renderCards() {
    if (recipes.length) {
      return recipes.map(({ strDrink, strDrinkThumb }, index) => (<MainCard
        key={ index }
        name={ strDrink }
        thumb={ strDrinkThumb }
      />));
    }
  }

  function renderFilters() {
    if (categories.length) {
      return categories.map(({ strCategory }) => (
        <button
          type="button"
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}
        </button>));
    }
  }

  return (
    <div>
      {renderFilters()}
      {renderCards()}
    </div>
  );
}

export default DrinkScreen;
