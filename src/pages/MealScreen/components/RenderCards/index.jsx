import React from 'react';
import { Redirect } from 'react-router';
import MainCard from '../../../../components/MainCard';

export default function RenderCards(props) {
  const {
    currentCategory,
    foodRecipes,
    foodRecipesByCategory,
    isLoading,
    foodApi,
  } = props;

  let recipes = foodRecipes;
  const { meals } = foodApi;
  console.log(meals);
  if (meals) {
    recipes = meals;
    if (meals.length === 1) {
      return <Redirect to={ `/comidas/${meals[0].idMeal}` } />;
    }
  }
  if (currentCategory !== 'All' && !isLoading) {
    recipes = foodRecipesByCategory[currentCategory];
  }
  if (meals === null) {
    alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return recipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
    <MainCard
      key={ index }
      index={ index }
      id={ idMeal }
      name={ strMeal }
      thumb={ strMealThumb }
    />
  ));
}
