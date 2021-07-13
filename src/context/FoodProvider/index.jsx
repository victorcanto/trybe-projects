import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

import data from '../../helpers/apiData';

import Context from './FoodContext';
import useRecipes from '../../hooks/useRecipes';
import useCategories from '../../hooks/useCategories';

function FoodProvider({ children }) {
  const { comidas: { domain, key } } = data;
  const [foodRecipes, isFetching] = useRecipes(domain, key);
  const categories = useCategories(domain, key);
  const [foodRecipesByCategory, setFoodRecipesByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(isFetching);

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
