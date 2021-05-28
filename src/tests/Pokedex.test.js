import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils';
import App from '../App';
import pokemons from '../data';

test('page contains an h2 heading with the text Encountered Pokémon', () => {
  renderWithRouter(<App />);
  const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i });
  expect(h2).toBeInTheDocument();
});

test('Next Pkm in the list is displayed when the Next Pkm button is clicked', () => {
  renderWithRouter(<App />);
  const nextPokemonBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(nextPokemonBtn).toHaveTextContent(/Próximo pokémon/i);

  const nClicks = 8;

  for (let index = 1; index <= nClicks; index += 1) {
    expect(screen.getByTestId('pokemon-name')).toBeInTheDocument();
    expect(screen.getByTestId('pokemon-type')).toBeInTheDocument();
    userEvent.click(nextPokemonBtn);
  }

  const firstPokemon = /Pikachu/i;
  userEvent.click(nextPokemonBtn);
  expect(screen.getByTestId(/pokemon-name/i)).toHaveTextContent(firstPokemon);
});

test('only one Pokémon is shown at a time', () => {
  renderWithRouter(<App />);
  const nextPokemonBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
  expect(screen.getByAltText('Pikachu sprite')).toBeInTheDocument();
  userEvent.click(nextPokemonBtn);
  expect(screen.getByAltText('Charmander sprite')).toBeInTheDocument();
});

test('Pokédex has the filter buttons', () => {
  renderWithRouter(<App />);
  const nextPokemonBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
  const fireBtn = screen.getByRole('button', { name: 'Fire' });
  const psychicBtn = screen.getByRole('button', { name: 'Psychic' });

  userEvent.click(fireBtn);
  expect(screen.getByText('Charmander')).toBeInTheDocument();

  userEvent.click(nextPokemonBtn);
  expect(screen.getByText('Rapidash')).toBeInTheDocument();

  userEvent.click(psychicBtn);
  expect(screen.getByText('Alakazam')).toBeInTheDocument();

  userEvent.click(nextPokemonBtn);
  expect(screen.getByText('Mew')).toBeInTheDocument();
});

test('Pokédex contains a button to reset the filter', () => {
  renderWithRouter(<App />);
  const nextPokemonBtn = screen.getByRole('button', { name: /Próximo pokémon/i });
  const resetFilterBtn = screen.getByRole('button', { name: 'All' });
  expect(resetFilterBtn).toBeInTheDocument();

  userEvent.click(resetFilterBtn);
  pokemons.forEach((pokemon) => {
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent(pokemon.name);
    userEvent.click(nextPokemonBtn);
  });
});

test('Filter button is created dynamically for each type of Pokémon', () => {
  renderWithRouter(<App />);

  const nTypesBtn = 7;
  const arrTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];

  const typesBtn = screen.getAllByTestId('pokemon-type-button');

  for (let index = 0; index < nTypesBtn; index += 1) {
    expect(typesBtn[index]).toBeInTheDocument();
    expect(typesBtn[index]).toHaveTextContent(arrTypes[index]);
  }

  const allBtn = screen.getByRole('button', { name: 'All' });
  expect(allBtn).toBeVisible();

  const nextPokemonBtn = screen.getByRole('button', { name: /Próximo pokémon/i });

  userEvent.click(typesBtn[0]);
  expect(nextPokemonBtn.disabled).toBe(true);

  userEvent.click(typesBtn[2]);
  expect(nextPokemonBtn.disabled).toBe(true);

  userEvent.click(typesBtn[3]);
  expect(nextPokemonBtn.disabled).toBe(true);

  userEvent.click(typesBtn[5]);
  expect(nextPokemonBtn.disabled).toBe(true);

  userEvent.click(typesBtn[6]);
  expect(nextPokemonBtn.disabled).toBe(true);
});
