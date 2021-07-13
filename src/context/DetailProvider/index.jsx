import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';

import data from '../../helpers/apiData';

import Context from './DetailContext';
import useRecipes from '../../hooks/useRecipes';
import useRecipeDetails from '../../hooks/useRecipeDetails';

const API_INFO_RECOMMENDED = {
  domain: 'themealdb',
  key: 'meals',
  qtdR: 6,
};

const API_INFO_DETAILS = {
  id: '52977',
  key: 'meals',
  domain: 'themealdb',
};

function DetailProvider({ children }) {
  const { comidas: { domain, key } } = data;
  const [infoDetails, setInfoDetails] = useState(API_INFO_DETAILS);
  const [infoRecommended, setInfoRecommended] = useState(API_INFO_RECOMMENDED);
  const [recipeDetails, isFetchingDetails] = useRecipeDetails(infoDetails);
  const [recommendedRecipes, isFetchingRecommended] = useRecipes(domain, key);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isFetchingDetails && isFetchingRecommended);
  }, [isFetchingDetails, isFetchingRecommended]);

  const value = {
    setInfoDetails,
    setInfoRecommended,
    recipeDetails,
    recommendedRecipes,
    isLoading,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default DetailProvider;

DetailProvider.propTypes = {
  children: node.isRequired,
};
