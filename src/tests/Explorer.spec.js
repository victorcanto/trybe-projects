import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testing the Footer component', () => {
  it('show footer on screen of meals', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/explorar');
    const footer = screen.getByTestId('explore-food');

    expect(footer).toBeInTheDocument();
  });
});
