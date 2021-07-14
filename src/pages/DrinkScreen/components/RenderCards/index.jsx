import React from 'react';
import { Redirect } from 'react-router';
import MainCard from '../../../../components/MainCard';

export default function RenderCards(props) {
  const {
    currentCategory,
    drinkRecipes,
    drinkRecipesByCategory,
    isLoading,
    drinkApi,
  } = props;

  let recipes = drinkRecipes;
  const { drinks } = drinkApi;
  if (drinks) {
    recipes = drinks;
    if (drinks.length === 1) {
      return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;
    }
  }
  if (currentCategory !== 'All' && !isLoading) {
    recipes = drinkRecipesByCategory[currentCategory];
  }

  return recipes.map(({ idDrink, strDrink, strDrinkThumb }, index) => (
    <MainCard
      key={ index }
      index={ index }
      id={ idDrink }
      name={ strDrink }
      thumb={ strDrinkThumb }
    />
  ));
}
