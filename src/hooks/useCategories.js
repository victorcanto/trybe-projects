import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/MainScreenAPI';

function useCategories({ name, domain, qtdC }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function requestCategories() {
      const res = await fetchCategories(name, domain, qtdC);
      setCategories(res);
    }
    requestCategories();
  }, [name, domain, qtdC]);

  return categories;
}

export default useCategories;
