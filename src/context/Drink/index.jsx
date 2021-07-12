import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

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
