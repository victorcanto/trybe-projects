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

const getLocationByPokemon = (pokemonID) => {
  const pokemon = getPokemon(pokemonID);
  return pokemon.foundAt.map(({ location }) => location);
};

const getMapByPokemon = (pokemonID) => {
  const pokemon = getPokemon(pokemonID);
  return pokemon.foundAt.map(({ map }) => map);
};

test('Detailed information about the selected Pokémon is shown on the screen.', () => {
  const { history } = renderWithRouter(<App />);
  const { id, name, summary } = getPokemon('25');
  history.push(`/pokemons/${id}`);

  expect(screen.getByText(`${name} Details`)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Summary/i })).toBeInTheDocument();
  expect(screen.getByText(summary)).toBeInTheDocument();
});

test('There is a section on the page with maps', () => {
  const { history } = renderWithRouter(<App />);
  const { id, name, foundAt } = getPokemon('25');
  history.push(`/pokemons/${id}`);

  expect(screen.getByRole('heading', { name: `Game Locations of ${name}` }))
    .toBeInTheDocument();

  const arrLocation = getLocationByPokemon(`${id}`);
  const arrMap = getMapByPokemon(`${id}`);

  const imgLocation = screen.getAllByAltText(`${name} location`);

  for (let index = 0; index < foundAt.length; index += 1) {
    expect(screen.getByText(arrLocation[index])).toBeInTheDocument();
    expect(imgLocation[index].src).toMatch(arrMap[index]);
    expect(imgLocation[index]).toBeInTheDocument();
  }
});

test('The user can bookmark a pokémon through the detail page', () => {
  const { history } = renderWithRouter(<App />);
  const { id, name } = getPokemon('25');
  history.push(`/pokemons/${id}`);

  const favoriteBtn = screen.getByLabelText(/Pokémon favoritado?/i);
  expect(favoriteBtn).toBeInTheDocument();

  userEvent.click(favoriteBtn);

  const favoriteMarked = screen.getByAltText(`${name} is marked as favorite`);

  const nClicks = 10;

  for (let index = 0; index <= nClicks; index += 1) {
    userEvent.click(favoriteBtn);
    expect(favoriteMarked).not.toBeInTheDocument();
    userEvent.click(favoriteBtn);
    expect(favoriteBtn).toBeInTheDocument();
  }
});
