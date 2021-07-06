import { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/MainScreenAPI';

function useRecipes({ name, domain, qtdR }) {
  const [recipes, setRecipes] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function requestRecipes() {
      const res = await fetchRecipes(name, domain, qtdR);
      setRecipes(res);
      setIsFetching(false);
    }
    requestRecipes();
  }, [name, domain, qtdR]);

  return [recipes, isFetching];
}

export default useRecipes;
