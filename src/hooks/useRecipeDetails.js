import { useState, useEffect } from 'react';
import fetchRecipeById from '../services/DetailScreenAPI';

function useRecipeDetails({ id, key, domain }) {
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    async function requestRecipe() {
      const res = await fetchRecipeById(id, key, domain);
      setRecipeDetails(res[0]);
    }
    requestRecipe();
  }, [domain, id, key]);

  return recipeDetails;
}

export default useRecipeDetails;
