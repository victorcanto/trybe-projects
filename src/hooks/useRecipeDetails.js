import { useState, useEffect } from 'react';
import fetchRecipeById from '../services/recipesApi';

function useRecipeDetails(domain, key, id) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function requestRecipe() {
      const res = await fetchRecipeById(domain, key, id);
      setRecipeDetails(res[0]);
      setIsFetching(false);
    }
    requestRecipe();
  }, [domain, key, id]);

  return [recipeDetails, isFetching];
}

export default useRecipeDetails;
