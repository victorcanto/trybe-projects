import { useState, useEffect } from 'react';
import fetchRecipeById from '../services/recipesApi';

function useRecipeDetails({ id, key, domain }) {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function requestRecipe() {
      const res = await fetchRecipeById(id, key, domain);
      setRecipeDetails(res[0]);
      setIsFetching(false);
    }
    requestRecipe();
  }, [domain, id, key]);

  return [recipeDetails, isFetching];
}

export default useRecipeDetails;
