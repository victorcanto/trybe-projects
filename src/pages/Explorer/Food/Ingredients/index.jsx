/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../../components/Header/Header';
import Footer from '../../../../components/Footer';
import styles from '../../explorerCards.module.scss';
import { fetchIngredient } from '../../../../services/recipesApi';
import FoodContext from '../../../../context/FoodProvider/FoodContext';

function ExploreIngredientsFood() {
  const [ingredients, setIngredients] = useState('');
  const { setFilterFood } = useContext(FoodContext);
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

  function filterByIngredients(ingredient) {
    setFilterFood({ key: 'ing', value: ingredient });
  }

  function renderIngredients() {
    return ingredients.map(({ strIngredient }, index) => (
      <Link
        key={ index }
        to="/comidas"
        onClick={ () => filterByIngredients(strIngredient) }
      >
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
      </Link>
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
