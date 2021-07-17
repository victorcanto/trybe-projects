/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import styles from '../../explorerCards.module.scss';
import { fetchIngredient } from '../../../../services/recipesApi';
import DrinkContext from '../../../../context/DrinkProvider/DrinkContext';

function ExploreIngredientsDrinks() {
  const [ingredients, setIngredients] = useState('');
  const { setFilterDrink } = useContext(DrinkContext);
  const API_INFO = {
    key: 'drinks',
    domain: 'thecocktaildb',
  };

  useEffect(() => {
    const getIngredients = async () => {
      const result = await fetchIngredient(API_INFO);
      setIngredients(result);
    };
    getIngredients();
  }, []);

  function filterByIngredients(ingredient) {
    setFilterDrink({ key: 'ing', value: ingredient });
  }

  function renderIngredients() {
    return ingredients.map(({ strIngredient1 }, index) => (
      <Link
        key={ index }
        to="/bebidas"
        onClick={ () => filterByIngredients(strIngredient1) }
      >
        <div
          className={ styles.card }
          key={ index }
          data-testid={ `${index}-ingredient-card` }
        >
          <img
            className={ styles.img }
            alt={ strIngredient1 }
            src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
            data-testid={ `${index}-card-img` }
          />
          <span data-testid={ `${index}-card-name` } className={ styles.cardName }>
            <h2>{ strIngredient1 }</h2>
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

export default ExploreIngredientsDrinks;
