import React, { useState, useEffect, useContext } from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import { fetchCategoriesByArea, filterByArea } from '../../../../services/recipesApi';
import MainCard from '../../../../components/MainCard';
import FoodContext from '../../../../context/FoodProvider/FoodContext';

const MEALS_SIZE = 12;

function FoodOrigin() {
  const { foodRecipes } = useContext(FoodContext);
  const [categoriesArea, setCategoriesArea] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [value, setValue] = useState('All');

  useEffect(() => {
    const requestCategories = async () => {
      const res = await fetchCategoriesByArea();
      setCategoriesArea(res);
    };
    requestCategories();
  }, []);

  useEffect(() => {
    function selectAll() {
      if (value === 'All') setFilteredRecipes(foodRecipes);
    }
    selectAll();
  });

  function handleSelect({ target }) {
    setValue(target.value);
  }

  useEffect(() => {
    async function requestRecipe() {
      const res = await filterByArea(value);
      setFilteredRecipes(res);
    }
    requestRecipe();
  }, [value]);

  return (
    <div>
      <Header title="Explorar Origem" icon />
      <select
        data-testid="explore-by-area-dropdown"
        onChange={ (e) => handleSelect(e) }
        value={ value }
      >
        <option data-testid="All-option">All</option>
        {categoriesArea.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` } key={ strArea } value={ strArea }>
            {strArea}
          </option>
        ))}
      </select>
      {filteredRecipes && filteredRecipes.slice(0, MEALS_SIZE)
        .map(({ idMeal, strMeal, strMealThumb }, index) => (
          <MainCard
            currentPage="area"
            key={ index }
            index={ index }
            id={ idMeal }
            name={ strMeal }
            thumb={ strMealThumb }
          />))}
      <Footer />
    </div>
  );
}

export default FoodOrigin;
