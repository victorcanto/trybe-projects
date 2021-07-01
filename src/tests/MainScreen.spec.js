import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const NUMBER_OF_CATEGORY_BTNS = 6;
const ARRAY_OF_BTNS_MEALS = ['All', 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];
const ARRAY_OF_BTNS_DRINKS = [
  'All',
  'Ordinary Drink',
  'Cocktail', 'Milk / Float / Shake',
  'Other/Unknown',
  'Cocoa',
];
const NUMBER_OF_RECIPE_CARDS = 12;

describe('Meals Page ', () => {
  it('Meals page route', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/comidas');
    const { location: { pathname } } = history;

    expect(pathname).toBe('/comidas');
  });

  it('filter buttons by category -meals', async () => {
    const { history, findAllByRole, findByText } = renderWithRouter(<App />);
    history.push('/comidas');

    const btns = await findAllByRole('button');

    expect(btns.length).toBe(NUMBER_OF_CATEGORY_BTNS);
    ARRAY_OF_BTNS_MEALS.forEach((btn, index) => {
      expect(btns[index]).toHaveTextContent(btn);
    });

    userEvent.click(btns[1]);
    const text = await findByText(/Beef and Mustard Pie/i); // Beef category button
    expect(text).toBeInTheDocument();
  });

  it('meal recipe cards', async () => {
    const {
      history,
      findByText,
      findAllByTestId } = renderWithRouter(<App />);
    history.push('/comidas');

    const text = await findByText(/corba/i);
    expect(text).toBeInTheDocument();

    const cards = await findAllByTestId(/recipe-card/i);
    expect(cards.length).toBe(NUMBER_OF_RECIPE_CARDS);

    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });

    userEvent.click(cards[0]);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/comidas/52977');
  });
});

describe('Drinks Page ', () => {
  it('Drinks page route', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/bebidas');
    const { location: { pathname } } = history;

    expect(pathname).toBe('/bebidas');
  });

  it('filter buttons by category -drinks', async () => {
    const { history, findAllByRole, findByText } = renderWithRouter(<App />);
    history.push('/bebidas');

    const btns = await findAllByRole('button');

    expect(btns.length).toBe(NUMBER_OF_CATEGORY_BTNS);
    ARRAY_OF_BTNS_DRINKS.forEach((btn, index) => {
      expect(btns[index]).toHaveTextContent(btn);
    });

    userEvent.click(btns[1]);
    const text = await findByText(/3-Mile Long Island Iced Tea/i); // Beef category button
    expect(text).toBeInTheDocument();
  });

  it('drink recipe cards', async () => {
    const {
      history,
      findByText,
      findAllByTestId } = renderWithRouter(<App />);
    history.push('/bebidas');

    const text = await findByText(/GG/i);
    expect(text).toBeInTheDocument();

    const cards = await findAllByTestId(/recipe-card/i);
    expect(cards.length).toBe(NUMBER_OF_RECIPE_CARDS);

    cards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });

    userEvent.click(cards[0]);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/bebidas/15997');
  });
});
