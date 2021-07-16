import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import MadeRecipes from '../pages/MadeRecipes';

const btnFilters = ['All', 'Food', 'Drinks'];

describe('Made recipes screen', () => {
  it('there are three filter buttons', () => {
    renderWithRouter(<MadeRecipes />);
    btnFilters.forEach((btn) => {
      const btnFilter = screen.getByRole('button', { name: btn });
      expect(btnFilter).toBeInTheDocument();
    });
  });
});
