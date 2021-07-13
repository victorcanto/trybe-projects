/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer';
import styles from '../../explorerCards.module.scss';
import { fetchIngredient } from '../../../../services/MainScreenAPI';

function ExploreIngredientsFood() {
  const [ingredients, setIngredients] = useState('');
  const API_INFO = {
    key: 'meals',
    domain: 'themealdb',
  };

  useEffect(() => {
    const getIngredients = async () => {
      const result = await fetchIngredient(API_INFO);
      setIngredients(result);
    };
    getIngredients();
  }, []);

  function renderIngredients() {
    return ingredients.map(({ strIngredient }, index) => (
      <div
        className={ styles.card }
        key={ index }
        data-testid={ `${index}-ingredient-card` }
      >
        <img
          className={ styles.img }
          alt={ strIngredient }
          src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
          data-testid={ `${index}-card-img` }
        />
        <span data-testid={ `${index}-card-name` } className={ styles.cardName }>
          <h2>{ strIngredient }</h2>
        </span>
      </div>
    ));
  }

  return (
    <div className={ styles.id }>
      <Header title="Explorar Ingredientes" icon="false" />
      {ingredients && renderIngredients()}
      <Footer />
    </div>
  );
}

export default ExploreIngredientsFood;
