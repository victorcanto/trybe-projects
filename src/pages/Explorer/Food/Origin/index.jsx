import React, { useState, useEffect } from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import { fetchCategoriesByArea } from '../../../../services/recipesApi';
import useRecipes from '../../../../hooks/useRecipes';

function FoodOrigin() {
  const [categoriesArea, setCategoriesArea] = useState([]);

  useEffect(() => {
    const requestCategories = async () => {
      const res = await fetchCategoriesByArea();
      setCategoriesArea(res);
    };
    requestCategories();
  }, []);

  return (
    <div>
      <Header title="Explorar Origem" icon />
      <select data-testid="explore-by-area-dropdown">
        <option disabled="">Selecione uma opção</option>
        <option data-testid="All-option">All</option>
        {categoriesArea.map(({ strArea }) => (
          <option data-testid={ `${strArea}-option` } key={ strArea }>
            {strArea}
          </option>
        ))}
      </select>
      <Footer />
    </div>
  );
}

export default FoodOrigin;
