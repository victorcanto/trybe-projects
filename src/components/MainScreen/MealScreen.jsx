import React, { useState, useEffect } from 'react';
import { fetchRecipes, fetchCategories } from '../../services/MainScreenAPI';
import MainCard from './MainCard';

const MEAL_DOMAIN = 'themealdb';
const meals = 'meals';
const QTD_RECIPES = 12;
const QTD_CATEGORIES = 5;

function MealScreen() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  async function requestRecipes() {
    const res = await fetchRecipes(meals, MEAL_DOMAIN, QTD_RECIPES);
    setData(res);
  }

  async function requestCategories() {
    const res = await fetchCategories(meals, MEAL_DOMAIN, QTD_CATEGORIES);
    setCategories(res);
  }

  useEffect(() => {
    requestRecipes();
    requestCategories();
  }, []);

  function renderCards() {
    if (data.length) {
      return data.map(({ strMeal, strMealThumb }, index) => (<MainCard
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
          data-testid={ `${strCategory}-category-filter` }
        >
          {strCategory}
        </button>));
    }
  }

  console.log(categories);

  return (
    <div>
      {renderFilters()}
      {renderCards()}
    </div>
  );
}

export default MealScreen;
