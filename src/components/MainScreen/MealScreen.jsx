import React, { } from 'react';
import useCategories from '../../hooks/useCategories';
import useRecipes from '../../hooks/useRecipes';
import MainCard from './MainCard';

const dataForMealApi = {
  domain: 'themealdb',
  name: 'meals',
  qtdC: 5,
  qtdR: 12,
};

function MealScreen() {
  const recipes = useRecipes(dataForMealApi);
  const categories = useCategories(dataForMealApi);

  function renderCards() {
    if (recipes.length) {
      return recipes.map(({ strMeal, strMealThumb }, index) => (<MainCard
        key={ index }
        name={ strMeal }
        thumb={ strMealThumb }
      />));
    }
  }

  function renderFilters() {
    if (categories.length) {
      return categories.map(({ strCategory }) => (
        <button
          type="button"
          key={ strCategory }
          recipes-testid={ `${strCategory}-category-filter` }
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

export default MealScreen;
