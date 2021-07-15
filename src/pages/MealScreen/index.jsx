/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import Categories from './components/Categories';
import RenderCards from './components/RenderCards';
import FoodContext from '../../context/FoodProvider/FoodContext';

import data from '../../helpers/apiData';
import { fetchRecipesByCategory } from '../../services/recipesApi';
import Loading from '../../components/Loading';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const { comidas: { domain, key } } = data;

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
