import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import Login from '../pages/Login';

describe('Testing the Login page', () => {
  test('should be in the root path', () => {
    const { history } = renderWithRouter(<Login />);
    const { location: { pathname } } = history;

    expect(pathname).toBe('/');
  });

  test('should has an email input', () => {
    renderWithRouter(<Login />);
    const emailInput = screen.getByTestId('email-input');

    expect(emailInput).toBeInTheDocument();
  });
});
