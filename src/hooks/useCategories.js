import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/MainScreenAPI';

function useCategories({ key, domain, qtdC }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function requestCategories() {
      const res = await fetchCategories(key, domain, qtdC);
      setCategories(res);
    }
    requestCategories();
  }, [key, domain, qtdC]);

  return categories;
}

export default useCategories;
