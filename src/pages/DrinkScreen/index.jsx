/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import Categories from './components/Categories';
import RenderCards from './components/RenderCards';
import DrinkContext from '../../context/DrinkProvider/DrinkContext';

import { fetchRecipesByCategory } from '../../services/recipesApi';

import Loading from '../../components/Loading';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const dataForDrinkApi = {
  domain: 'thecocktaildb',
  key: 'drinks',
  qtdC: 5,
  qtdR: 12,
};

function DrinkScreen() {
  const {
    categories,
    drinkRecipes,
    drinkRecipesByCategory,
    setDrinkRecipesByCategory,
    isLoading,
    setIsLoading,
    drinkApi,
  } = useContext(DrinkContext);

  const [currentCategory, setCurrentCategory] = useState('All');

  useEffect(() => {
    const loadedCategories = Object.keys(drinkRecipesByCategory);
    const getRecipesByCategory = async () => {
      try {
        const { key, domain, qtdR } = dataForDrinkApi;
        const data = await fetchRecipesByCategory(key, currentCategory, domain, qtdR);
        setDrinkRecipesByCategory((prev) => ({
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
    const loadedCategories = Object.keys(drinkRecipesByCategory);

    if (category === currentCategory) return setCurrentCategory('All');

    if (loadedCategories.includes(category) || category === 'All') {
      return (setCurrentCategory(category));
    }

    setIsLoading(true);
    setCurrentCategory(category);
  }

  return (
    <div>
      <Header title="Bebidas" icon="true" currentPage="Drink" />
      <Categories
        categories={ categories }
        renderRecipesByCategory={ renderRecipesByCategory }
      />
      {isLoading ? <Loading /> : <RenderCards
        currentCategory={ currentCategory }
        drinkRecipes={ drinkRecipes }
        drinkRecipesByCategory={ drinkRecipesByCategory }
        isLoading={ isLoading }
        drinkApi={ drinkApi }
      />}
      <Footer />
    </div>
  );
}

export default DrinkScreen;
