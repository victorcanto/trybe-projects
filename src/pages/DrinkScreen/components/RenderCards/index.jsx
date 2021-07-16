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

  const DRINKS_SIZE = 12;

  let recipes = drinkRecipes;
  const { drinks } = drinkApi;
  if (drinks) {
    recipes = drinks.slice(0, DRINKS_SIZE);
    if (drinks.length === 1) {
      return <Redirect to={ `/bebidas/${drinks[0].idDrink}` } />;
    }
  }
  if (currentCategory !== 'All' && !isLoading) {
    recipes = drinkRecipesByCategory[currentCategory];
  }
  if (drinks === null) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
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
