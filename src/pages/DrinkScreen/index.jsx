import React, { useState } from 'react';
import useCategories from '../../hooks/useCategories';
import useRecipes from '../../hooks/useRecipes';
import MainCard from '../../components/MainCard';
import { fetchRecipesByCategory } from '../../services/MainScreenAPI';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const dataForDrinkApi = {
  domain: 'thecocktaildb',
  key: 'drinks',
  qtdC: 5,
  qtdR: 12,
};

function DrinkScreen() {
  const recipes = useRecipes(dataForDrinkApi);
  const categories = useCategories(dataForDrinkApi);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  async function getRecipesByCategory(target) {
    const { key, domain, qtdR } = dataForDrinkApi;
    const categoryName = target.textContent;
    const data = await fetchRecipesByCategory(key, categoryName, domain, qtdR);
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

    return arr.map(({ idDrink, strDrink, strDrinkThumb }, index) => (<MainCard
      key={ index }
      index={ index }
      id={ idDrink }
      name={ strDrink }
      thumb={ strDrinkThumb }
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
      <Header title="Bebidas" icon="true" currentPage="Drink" />
      {renderFilters()}
      {renderCards()}
      <Footer />
    </div>
  );
}

export default DrinkScreen;
