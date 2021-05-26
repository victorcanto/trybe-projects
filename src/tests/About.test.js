import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { About } from '../components';

describe('the page contains information about Pokédex.', () => {
  it('the page contains an h2 header with the text About Pokédex', () => {
    render(<About />, { wrapper: MemoryRouter });
    expect(screen.getByText(/About Pokédex/i)).toBeInTheDocument();
  });

  it('page contains two paragraphs with text about Pokédex', () => {
    render(<About />, { wrapper: MemoryRouter });
    const p1 = screen.getByText(/This application simulates a Pokédex/i);
    const p2 = screen.getByText(/One can filter Pokémons by type/i);
    expect(p1).toBeInTheDocument();
    expect(p2).toBeInTheDocument();
  });

  it('page contains the following image of a Pokédex', () => {
    render(<About />, { wrapper: MemoryRouter });
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
