/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import FoodContext from '../../context/Food/FoodContext';
import Categories from './components/Categories';
import RenderCards from './components/RenderCards';

import { fetchRecipesByCategory } from '../../services/MainScreenAPI';

import Loading from '../../components/Loading';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const dataForMealApi = {
  domain: 'themealdb',
  key: 'meals',
  qtdC: 5,
  qtdR: 12,
};

function MealScreen() {
  const {
    categories,
    foodRecipesByCategory,
    foodRecipes,
    setFoodRecipesByCategory,
    isLoading,
    setIsLoading,
    foodApi,
  } = useContext(FoodContext);

  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    const loadedCategories = Object.keys(foodRecipesByCategory);
    const getRecipesByCategory = async () => {
      try {
        const { key, domain, qtdR } = dataForMealApi;
        const data = await fetchRecipesByCategory(key, currentCategory, domain, qtdR);
        setFoodRecipesByCategory((prev) => ({
          ...prev,
          [currentCategory]: data,
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

  async function renderRecipesByCategory({ target }) {
    const category = target.textContent;
    const loadedCategories = Object.keys(foodRecipesByCategory);

    if (category === currentCategory) return setCurrentCategory('All');

    if (loadedCategories.includes(category) || category === 'All') {
      return setCurrentCategory(category);
    }

    setIsLoading(true);
    setCurrentCategory(category);
  }
  return (
    <div>
      <Header title="Comidas" icon="true" currentPage="Foods" />
      <Categories
        categories={ categories }
        renderRecipesByCategory={ renderRecipesByCategory }
      />
      {isLoading ? <Loading /> : <RenderCards
        currentCategory={ currentCategory }
        foodRecipes={ foodRecipes }
        foodRecipesByCategory={ foodRecipesByCategory }
        isLoading={ isLoading }
        foodApi={ foodApi }
      />}
      <Footer />
    </div>
  );
}

export default MealScreen;
