/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import FoodContext from '../../context/FoodProvider/FoodContext';

import data from '../../helpers/apiData';
import { fetchRecipesByCategory } from '../../services/recipesApi';

import Loading from '../../components/Loading';
import Header from '../../components/Header/Header';
import MainCard from '../../components/MainCard';
import Footer from '../../components/Footer';

const { comidas: { domain, key } } = data;

function MealScreen() {
  const {
    categories,
    foodRecipes,
    foodRecipesByCategory,
    setFoodRecipesByCategory,
    isLoading,
    setIsLoading,
  } = useContext(FoodContext);

  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    const loadedCategories = Object.keys(foodRecipesByCategory);
    const getRecipesByCategory = async () => {
      try {
        const apiResponse = await fetchRecipesByCategory(domain, key, currentCategory);
        setFoodRecipesByCategory((prev) => ({
          ...prev,
          [currentCategory]: apiResponse,
        }));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (!loadedCategories.includes(currentCategory) && currentCategory !== 'All') {
      getRecipesByCategory();
    }
  }, [currentCategory]);

  function renderRecipesByCategory({ target }) {
    const category = target.textContent;
    const loadedCategories = Object.keys(foodRecipesByCategory);

    if (category === currentCategory) return setCurrentCategory('All');

    if (loadedCategories.includes(category) || category === 'All') {
      return setCurrentCategory(category);
    }

    setIsLoading(true);
    setCurrentCategory(category);
  }

  function renderCards() {
    let recipes = foodRecipes;

    if (currentCategory !== 'All' && !isLoading) {
      recipes = foodRecipesByCategory[currentCategory];
    }

    return recipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
      <MainCard
        key={ index }
        index={ index }
        id={ idMeal }
        name={ strMeal }
        thumb={ strMealThumb }
      />
    ));
  }

  function renderFilters() {
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

  return (
    <div>
      <Header title="Comidas" icon="true" currentPage="Foods" />
      {renderFilters()}
      {isLoading ? <Loading /> : renderCards()}
      <Footer />
    </div>
  );
}

export default MealScreen;
