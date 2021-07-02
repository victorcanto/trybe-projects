/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import FoodContext from '../../context/Foods/FoodContext';

import { fetchRecipesByCategory } from '../../services/MainScreenAPI';

import Loading from '../../components/Loading';
import Header from '../../components/Header/Header';
import MainCard from '../../components/MainCard';
import Footer from '../../components/Footer';

const dataForMealApi = {
  domain: 'themealdb',
  name: 'meals',
  qtdC: 5,
  qtdR: 12,
};

function MealScreen() {
  const {
    categories,
    foodRecipes,
    foodRecipesByCategory,
    setFoodRecipesByCategory,
    isLoading,
    setIsLoading,
  } = useContext(FoodContext);

  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    const loadedCategories = Object.keys(foodRecipesByCategory);
    const getRecipesByCategory = async () => {
      try {
        const { name, domain, qtdR } = dataForMealApi;
        const data = await fetchRecipesByCategory(name, currentCategory, domain, qtdR);
        setFoodRecipesByCategory((prev) => ({
          ...prev,
          [currentCategory]: data,
        }));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (!loadedCategories.includes(currentCategory) && currentCategory !== 'all') {
      getRecipesByCategory();
    } else setIsLoading(false);
  }, [currentCategory]);

  async function renderRecipesByCategory({ target }) {
    const category = target.textContent.toLowerCase();

    if (category === currentCategory) return setCurrentCategory('all');

    setIsLoading(true);
    setCurrentCategory(category);
  }

  function renderCards() {
    let recipes = foodRecipes;

    if (currentCategory !== 'all' && !isLoading) {
      recipes = foodRecipesByCategory[currentCategory];
      console.log('recipes');
    }

    console.log(foodRecipesByCategory);

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
      <Header title="Comidas" icon="true" currentPage="Foods" />
      {renderFilters()}
      {isLoading ? <Loading /> : renderCards()}
      <Footer />
    </div>
  );
}

export default MealScreen;
