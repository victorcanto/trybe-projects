import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const comidasPath = '/comidas';
const bebidasPath = '/bebidas';
const corbaFoodFromTheDetaislPage = '/comidas/52977';
const ggDrinkFromTheDetailsPage = '/bebidas/15997';
const RECOMMENDED_RECIPES_SIZE = 6;

describe('Details Page', () => {
  it('if the route is correct Foods', async () => {
    const { history } = renderWithRouter(<App />);

    history.push(comidasPath);
    const recipeCardCorba = await screen.findByTestId('0-recipe-card');

    userEvent.click(recipeCardCorba);
    const { location: { pathname } } = history;
    expect(pathname).toBe(corbaFoodFromTheDetaislPage);
  });

  it('if the route is correct Drinks', async () => {
    const { history } = renderWithRouter(<App />);

    history.push(bebidasPath);
    const recipeCardGG = await screen.findByTestId('0-recipe-card');

    userEvent.click(recipeCardGG);
    const { location: { pathname } } = history;
    expect(pathname).toBe(ggDrinkFromTheDetailsPage);
  });

  it('check if the image of the recipe exists, be it drink or food', async () => {
    const { history } = renderWithRouter(<App />);

    history.push(corbaFoodFromTheDetaislPage);
    const imageCorba = await screen.findByTestId('recipe-photo');
    expect(imageCorba).toBeInTheDocument();

    history.push(ggDrinkFromTheDetailsPage);
    const imageGGDrink = await screen.findByTestId('recipe-photo');
    expect(imageGGDrink).toBeInTheDocument();
  });

  it('check if there is the title of the name of the food', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);

    history.push(corbaFoodFromTheDetaislPage);
    const corbaTitle = await findByTestId('recipe-title');
    expect(corbaTitle).toBeInTheDocument();
    await expect(corbaTitle).toHaveTextContent('Corba');
  });

  it('check if there is the title of the name of the drink', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);

    history.push(ggDrinkFromTheDetailsPage);
    const ggTitle = await findByTestId('recipe-title');
    await expect(ggTitle).toHaveTextContent('GG');
  });

  it('there are share and favorite recipe buttons', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(corbaFoodFromTheDetaislPage);

    const shareBtn = await screen.findByTestId('share-btn');
    const favoriteBtn = await screen.findByTestId('favorite-btn');

    expect(shareBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
  });

  it('check if all the ingredients exist', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(corbaFoodFromTheDetaislPage);

    const ingredientsFood = await screen.findAllByTestId(/ingredient-name-and-measure/i);
    ingredientsFood.forEach((ingredient) => {
      expect(ingredient).toBeInTheDocument();
    });

    history.push(ggDrinkFromTheDetailsPage);

    const ingredientsDrink = await screen.findAllByTestId(/ingredient-name-and-measure/i);
    ingredientsDrink.forEach((ingredient) => {
      expect(ingredient).toBeInTheDocument();
    });
  });

  it('check for recipe instructions', async () => {
    const { history } = renderWithRouter(<App />);
    history.push(corbaFoodFromTheDetaislPage);

    const instructionsFood = await screen.findByTestId('instructions');
    expect(instructionsFood).toBeInTheDocument();

    history.push(ggDrinkFromTheDetailsPage);
    const instructionsDrink = await screen.findByTestId('instructions');
    expect(instructionsDrink).toBeInTheDocument();
  });

  it('check if there is a video in the food details only', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push(corbaFoodFromTheDetaislPage);

    const corbaVideoYT = await findByTestId('video');
    expect(corbaVideoYT.src).toBe('https://www.youtube.com/embed/VVnZd8A84z4');
    expect(corbaVideoYT).toBeInTheDocument();
  });

  it('check if there are 6 recommended cards', async () => {
    const { history, findAllByTestId } = renderWithRouter(<App />);
    history.push(corbaFoodFromTheDetaislPage);

    const recommendedCards = await findAllByTestId(/recomendation-card/i);
    recommendedCards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });

    await expect(recommendedCards.length).toBe(RECOMMENDED_RECIPES_SIZE);
  });
});
