import React, { useEffect, useState } from 'react';
import { node } from 'prop-types';

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

  useEffect(() => {
    setIsLoading(isFetching);
  }, [isFetching]);

  console.log(foodRecipesByCategory);

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
