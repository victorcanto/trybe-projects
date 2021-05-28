import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

test('shows the Pokédex when the route is `/`', () => {
  render(
    <MemoryRouter initialEntries={ ['/'] }>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText('Encountered pokémons')).toBeInTheDocument();
});

test('show fixed set of navigation links', () => {
  // source: https://testing-library.com/docs/example-react-router/#reducing-boilerplate
  render(<App />, { wrapper: MemoryRouter });
  const linkHome = screen.getByText(/Home/i);
  const linkAbout = screen.getByText(/About/i);
  const linkFavoritePokemons = screen.getByText(/Favorite Pokémons/i);

  expect(linkHome).toBeInTheDocument();
  expect(linkAbout).toBeInTheDocument();
  expect(linkFavoritePokemons).toBeInTheDocument();
});

test('redirected to a home page by clicking the Home link', () => {
  const { history } = renderWithRouter(<App />);
  userEvent.click(screen.getByText(/Home/i));
  const { pathname } = history.location;
  expect(pathname).toMatch('/');
});

test('redirected to a about page by clicking the About link', () => {
  const { history } = renderWithRouter(<App />);
  userEvent.click(screen.getByText(/About/i));
  const { pathname } = history.location;
  expect(pathname).toMatch(/about/i);
});

test('redirected to a favoritePokemons page by clicking the Favorite link', () => {
  const { history } = renderWithRouter(<App />);
  userEvent.click(screen.getByText('Favorite Pokémons'));
  const { pathname } = history.location;
  expect(pathname).toMatch(/favorites/i);
});

test('redirected to the Not Found page when entering an unknown url', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/page/not-found');
  expect(screen.getByText(/page requested not found/i)).toBeInTheDocument();
});
