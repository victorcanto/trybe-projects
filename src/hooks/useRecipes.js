import { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/MainScreenAPI';

function useRecipes({ key, domain, qtdR }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function requestRecipes() {
      const res = await fetchRecipes(key, domain, qtdR);
      setRecipes(res);
    }
    requestRecipes();
  }, [key, domain, qtdR]);

  return recipes;
}

export default useRecipes;
