import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer';
import { fetchRandomApiDrink } from '../../../services/recipesApi';

function ExploreDrinks() {
  const [idDrink, setIdDrink] = useState('');

  useEffect(() => {
    const getId = async () => {
      const { idDrink: id } = await fetchRandomApiDrink();
      setIdDrink(id);
    };
    getId();
  }, []);

  return (
    <div>
      <Header title="Explorar Bebidas" icon="false" />
      <a href="/explorar/bebidas/ingredientes">
        <h2 data-testid="explore-by-ingredient">Por Ingredientes</h2>
      </a>
      <a href={ `/bebidas/${idDrink}` }>
        <h2 data-testid="explore-surprise">Me Surpreenda!</h2>
      </a>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
