import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';
import {
  filterFirstLetter,
  filterIngredient,
  filterName,
  filterCategory,
} from '../../services/MainScreenAPI';

import Context from './DrinkContext';
import useRecipes from '../../hooks/useRecipes';
import useCategories from '../../hooks/useCategories';

const API_INFO = {
  domain: 'thecocktaildb',
  key: 'drinks',
  qtdC: 5,
  qtdR: 12,
};

function DrinkProvider({ children }) {
  const [drinkRecipes, isFetching] = useRecipes(API_INFO);
  const categories = useCategories(API_INFO);
  const [drinkRecipesByCategory, setDrinkRecipesByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(isFetching);

  const [drinkApi, setDrinkApi] = useState([]);
  const [filterDrink, setFilterDrink] = useState({ key: 'name', value: '' });
  const { key, value } = filterDrink;

  useEffect(() => {
    async function connect() {
      if (key === 'ing') {
        const i = await filterIngredient(value, 'Drinks');
        return setDrinkApi(i);
      }
      if (key === 'name') {
        const n = await filterName(value, 'Drinks');
        return setDrinkApi(n);
      }
      if (key === 'first') {
        if (value.length > 1) {
          // eslint-disable-next-line no-alert
          alert('Sua busca deve conter somente 1 (um) caracter');
          return;
        }
        const f = await filterFirstLetter(value, 'Drinks');
        console.log(value);
        return setDrinkApi(f);
      }
      if (key === 'category') {
        const c = await filterCategory(value, 'Drinks');
        return setDrinkApi(c);
      }
    }
    connect();
  }, [key, value]);

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  return (
    <Context.Provider
      value={ {
        categories,
        drinkRecipes,
        drinkRecipesByCategory,
        setDrinkRecipesByCategory,
        isLoading,
        setIsLoading,
        drinkApi,
        setDrinkApi,
        filterDrink,
        setFilterDrink,
      } }
    >
      {children}
    </Context.Provider>
  );
}

DrinkProvider.propTypes = {
  children: node.isRequired,
};

export default DrinkProvider;
