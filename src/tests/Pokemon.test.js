import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils';
import App from '../App';
import pokemons from '../data';

const getPokemon = (pokemonID) => {
  const int = parseInt(pokemonID, 10);
  return pokemons.find(({ id }) => id === int);
};

test('The card is rendered with the information of a certain Pokémon', () => {
  renderWithRouter(<App />);
  const { averageWeight, image, name, type } = getPokemon('25');
  const { measurementUnit, value } = averageWeight;

  expect(screen.getByTestId('pokemon-name')).toHaveTextContent(name);
  expect(screen.getByTestId('pokemon-type')).toHaveTextContent(type);
  expect(screen.getByTestId('pokemon-weight'))
    .toHaveTextContent(`Average weight: ${value} ${measurementUnit}`);
  expect(screen.getByAltText(`${name} sprite`).src).toMatch(image);
});

test('navigation link of the selected pokemon', () => {
  const { history } = renderWithRouter(<App />);
  const { id } = getPokemon('25');
  const linkDetails = screen.getByRole('link', { name: /More Details/i });

  userEvent.hover(linkDetails);
  expect(linkDetails.href).toMatch(`/pokemons/${id}`);

  userEvent.click(linkDetails);
  const { pathname } = history.location;
  expect(pathname).toMatch(`/pokemons/${id}`);
});

test('there is a star icon on favorite Pokémon.', () => {
  const { history } = renderWithRouter(<App />);
  const { name, id } = getPokemon('25');

  history.push(`/pokemons/${id}`);

  const favoriteBtn = screen.getByLabelText(/Pokémon favoritado?/i);
  userEvent.click(favoriteBtn);

  const imgStar = screen.getByAltText(`${name} is marked as favorite`);
  expect(imgStar.src).toMatch('/star-icon.svg');
});
