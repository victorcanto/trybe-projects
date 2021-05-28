import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import NotFound from '../components/NotFound';

test('page contains an h2 heading with the text Page requested not found 😭', () => {
  renderWithRouter(<NotFound />);
  expect(screen.getByRole('heading', { name: 'Page requested not found Crying emoji' }))
    .toBeInTheDocument();
});

test('page shows the image', () => {
  renderWithRouter(<NotFound />);
  const img = screen.getAllByRole('img');
  expect(img[1].src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
