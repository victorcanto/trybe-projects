/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from 'react';
import DrinkContext from '../../context/DrinkProvider/DrinkContext';

import { fetchRecipesByCategory } from '../../services/recipesApi';

import Loading from '../../components/Loading';
import Header from '../../components/Header/Header';
import MainCard from '../../components/MainCard';
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

  function renderCards() {
    let recipes = drinkRecipes;

    if (currentCategory !== 'All' && !isLoading) {
      recipes = drinkRecipesByCategory[currentCategory];
    }

    return recipes.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
      <MainCard
        key={ index }
        index={ index }
        id={ idDrink }
        name={ strDrink }
        thumb={ strDrinkThumb }
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
      <Header title="Bebidas" icon="true" currentPage="Drink" />
      {renderFilters()}
      {isLoading ? <Loading /> : renderCards()}
      <Footer />
    </div>
  );
}

export default DrinkScreen;
