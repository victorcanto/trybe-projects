import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import {
  filterFirstLetter,
  filterIngredient,
  filterName,
  filterCategory,
} from '../../services/recipesApi';

import data from '../../helpers/apiData';

import Context from './FoodContext';
import useRecipes from '../../hooks/useRecipes';
import useCategories from '../../hooks/useCategories';

function FoodProvider({ children }) {
  const { comidas: { domain, key: keyName } } = data;
  const [foodRecipes, isFetching] = useRecipes(domain, keyName);
  const categories = useCategories(domain, keyName);
  const [foodRecipesByCategory, setFoodRecipesByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(isFetching);

  const [foodApi, setFoodApi] = useState([]);
  const [filterFood, setFilterFood] = useState({ key: 'name', value: '' });
  const { key, value } = filterFood;

  useEffect(() => {
    async function connect() {
      if (key === 'ing') {
        const i = await filterIngredient(value, 'Foods');
        setIsLoading(false);
        return setFoodApi(i);
      }
      if (key === 'name') {
        const n = await filterName(value, 'Foods');
        setIsLoading(false);
        return setFoodApi(n);
      }
      if (key === 'first') {
        if (value.length > 1) {
          // eslint-disable-next-line no-alert
          alert('Sua busca deve conter somente 1 (um) caracter');
          setIsLoading(false);
          return;
        }
        const f = await filterFirstLetter(value, 'Foods');
        setIsLoading(false);
        return setFoodApi(f);
      }
      if (key === 'category') {
        const c = await filterCategory(value, 'Foods');
        setIsLoading(false);
        return setFoodApi(c);
      }
    }
    setIsLoading(true);
    connect();
  }, [key, value]);

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
