import React from 'react';
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Profile from '../pages/Profile';
import renderWithRouter from './helpers/renderWithRouter';

const USER_EMAIL = 'example@mail.com';
const USER_PASS = '12345678';

describe('Profile screen', () => {
  it('check the users email', () => {
    const { history } = renderWithRouter(<App />);
    const inputEmail = screen.getByPlaceholderText('E-mail');
    const inputPassword = screen.getByPlaceholderText('Password');
    const loginBtn = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(inputEmail, USER_EMAIL);
    userEvent.type(inputPassword, USER_PASS);
    userEvent.click(loginBtn);

    history.push('/perfil');
    const elEmail = screen.getByText(USER_EMAIL);
    expect(elEmail).toBeInTheDocument();
  });

  it('redirected to recipes made page click on recipes made button', () => {
    const { history } = renderWithRouter(<Profile />);
    const doneRecipesBtn = screen.getByRole('button', { name: 'Receitas Feitas' });
    userEvent.click(doneRecipesBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/receitas-feitas');
  });

  it('redirected to favorite recipes page click on favorite recipes button', () => {
    const { history } = renderWithRouter(<Profile />);
    const favoriteRecipesBtn = screen.getByRole('button', { name: 'Receitas Favoritas' });
    userEvent.click(favoriteRecipesBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/receitas-favoritas');
  });

  it('redirected to login page click on exit button', () => {
    const { history } = renderWithRouter(<Profile />);
    const exitBtn = screen.getByRole('button', { name: 'Sair' });
    userEvent.click(exitBtn);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/');
  });
});
