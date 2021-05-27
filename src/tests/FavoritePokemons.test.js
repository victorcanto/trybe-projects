import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Test the <FavoritePokemons.js /> component', () => {
  it('show message if you don\'t have favorite pokemon', () => {
    renderWithRouter(<FavoritePokemons />);
    expect(screen.getByText(/No favorite pokemon found/i)).toBeInTheDocument();
  });

  it('all favorite Pokémon cards are displayed', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');
    const favoriteBtn25 = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favoriteBtn25);
    history.push('/favorites');

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Electric')).toBeInTheDocument();
    expect(screen.getByText('Average weight: 6.0 kg')).toBeInTheDocument();
    expect(screen.getByAltText('Pikachu sprite')).toBeInTheDocument();
    expect(screen.getByAltText('Pikachu is marked as favorite')).toBeInTheDocument();

    history.push('/pokemons/4');
    const favoriteBtn4 = screen.getByLabelText('Pokémon favoritado?');
    userEvent.click(favoriteBtn4);
    history.push('/favorites');

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Electric')).toBeInTheDocument();
    expect(screen.getByText('Average weight: 6.0 kg')).toBeInTheDocument();
    expect(screen.getByAltText('Pikachu sprite')).toBeInTheDocument();
    expect(screen.getByAltText('Pikachu is marked as favorite')).toBeInTheDocument();

    expect(screen.getByText('Charmander')).toBeInTheDocument();
    expect(screen.getByText('Fire')).toBeInTheDocument();
    expect(screen.getByText('Average weight: 8.5 kg')).toBeInTheDocument();
    expect(screen.getByAltText('Charmander sprite')).toBeInTheDocument();
    expect(screen.getByAltText('Charmander is marked as favorite')).toBeInTheDocument();
  });
});
