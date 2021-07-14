import { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/MainScreenAPI';

function useRecipes({ key, domain, qtdR }) {
  const [recipes, setRecipes] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function requestRecipes() {
      const res = await fetchRecipes(key, domain, qtdR);
      setRecipes(res);
      setIsFetching(false);
    }
    requestRecipes();
  }, [key, domain, qtdR]);
  return [recipes, isFetching];
}

export default useRecipes;
