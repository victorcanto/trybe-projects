import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/recipesApi';

function useCategories(domain, key) {
  const CATEGORIES_AMOUNT = 5;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function requestCategories() {
      const res = await fetchCategories(domain, key, CATEGORIES_AMOUNT);
      setCategories(res);
    }
    requestCategories();
  }, [domain, key, CATEGORIES_AMOUNT]);

  return categories;
}

export default useCategories;
