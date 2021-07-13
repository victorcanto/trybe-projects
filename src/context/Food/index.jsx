import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import {
  filterFirstLetter,
  filterIngredient,
  filterName,
  filterCategory,
} from '../../services/MainScreenAPI';

import Context from './FoodContext';
import useRecipes from '../../hooks/useRecipes';
import useCategories from '../../hooks/useCategories';

const API_INFO = {
  domain: 'themealdb',
  key: 'meals',
  qtdC: 5,
  qtdR: 12,
};

function FoodProvider({ children }) {
  const [foodRecipes, isFetching] = useRecipes(API_INFO);
  const categories = useCategories(API_INFO);
  const [foodRecipesByCategory, setFoodRecipesByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(isFetching);

  const [foodApi, setFoodApi] = useState([]);
  const [filterFood, setFilterFood] = useState({ key: 'name', value: '' });
  const { key, value } = filterFood;

  useEffect(() => {
    async function connect() {
      if (key === 'ing') {
        const i = await filterIngredient(value, 'Foods');
        return setFoodApi(i);
      }
      if (key === 'name') {
        const n = await filterName(value, 'Foods');
        return setFoodApi(n);
      }
      if (key === 'first') {
        if (value.length > 1) {
          // eslint-disable-next-line no-alert
          alert('Sua busca deve conter somente 1 (um) caracter');
          return;
        }
        const f = await filterFirstLetter(value, 'Foods');
        return setFoodApi(f);
      }
      if (key === 'category') {
        const c = await filterCategory(value, 'Foods');
        return setFoodApi(c);
      }
    }
    connect();
  }, [key, value]);
  console.log(filterFood);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  return (
    <Context.Provider
      value={ {
        categories,
        foodRecipes,
        foodRecipesByCategory,
        setFoodRecipesByCategory,
        isLoading,
        setIsLoading,
        foodApi,
        setFoodApi,
        filterFood,
        setFilterFood,
      } }
    >
      {children}
    </Context.Provider>
  );
}

FoodProvider.propTypes = {
  children: node.isRequired,
};

export default FoodProvider;
