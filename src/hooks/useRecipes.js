import { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/MainScreenAPI';

function useRecipes({ name, domain, qtdR }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function requestRecipes() {
      const res = await fetchRecipes(name, domain, qtdR);
      setRecipes(res);
    }
    requestRecipes();
  }, [name, domain, qtdR]);

  return recipes;
}

export default useRecipes;
