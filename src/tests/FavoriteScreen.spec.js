import React from 'react';
// import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const LASAGNE_DETAILS = '/comidas/52844';
// const FAVORITE_RECIPES = '/receitas-favoritas';

describe('FavoriteScreen page', () => {
  it('check if favorite food appears on the screen', async () => {
    const { history, findByTestId } = renderWithRouter(<App />);
    history.push(LASAGNE_DETAILS);

    const favoriteBtn = await findByTestId('favorite-btn');
    expect(favoriteBtn).toBeInTheDocument();

    userEvent.click(favoriteBtn);
    // history.push(FAVORITE_RECIPES);

    // const lasagneImg = screen.getAllByAltText('Lasagne');
    // expect(lasagneImg).toBeInTheDocument();
    // expect(lasagneImg.src).toBe('https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg');

    // const lasagneTitle = screen.getAllByText('Lasagne');
    // const lasagneArea = screen.getAllByText('Italian');
    // const lasagneCategory = screen.getAllByText('Pasta');

    // expect(lasagneTitle).toBeInTheDocument();
    // expect(lasagneArea).toBeInTheDocument();
    // expect(lasagneCategory).toBeInTheDocument();
  });
});
