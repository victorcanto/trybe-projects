import React, { useState } from 'react';
import useCategories from '../../hooks/useCategories';
import useRecipes from '../../hooks/useRecipes';
import MainCard from './MainCard';
import { fetchRecipesByCategory } from '../../services/MainScreenAPI';

const dataForMealApi = {
  domain: 'themealdb',
  name: 'meals',
  qtdC: 5,
  qtdR: 12,
};

function MealScreen() {
  const recipes = useRecipes(dataForMealApi);
  const categories = useCategories(dataForMealApi);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  async function getRecipesByCategory(target) {
    const { name, domain, qtdR } = dataForMealApi;
    const categoryName = target.textContent;
    const data = await fetchRecipesByCategory(name, categoryName, domain, qtdR);
    return data;
  }

  async function renderRecipesByCategory({ target }) {
    if (target.textContent === 'All'
    || !target.classList.toggle('select')) setFilteredRecipes(recipes);
    else {
      setFilteredRecipes(await getRecipesByCategory(target));
    }
  }

  function renderCards() {
    let arr = recipes;
    if (filteredRecipes.length !== 0) arr = filteredRecipes;

    return arr.map(({ idMeal, strMeal, strMealThumb }, index) => (<MainCard
      key={ index }
      index={ index }
      id={ idMeal }
      name={ strMeal }
      thumb={ strMealThumb }
    />));
  }

  function renderFilters() {
    if (categories.length) {
      return (
        <div>
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ renderRecipesByCategory }
          >
            All
          </button>
          {categories.map(({ strCategory }) => (
            <button
              className="btn-filter"
              type="button"
              key={ strCategory }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ renderRecipesByCategory }
            >
              {strCategory}
            </button>))}
        </div>
      );
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
