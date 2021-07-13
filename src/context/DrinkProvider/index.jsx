import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import data from '../../helpers/apiData';

import Context from './DrinkContext';
import useRecipes from '../../hooks/useRecipes';
import useCategories from '../../hooks/useCategories';

function DrinkProvider({ children }) {
  const { bebidas: { domain, key } } = data;
  const [drinkRecipes, isFetching] = useRecipes(domain, key);
  const categories = useCategories(domain, key);
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
