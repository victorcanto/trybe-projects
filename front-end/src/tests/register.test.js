import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import * as c from './constants';

describe('Register', () => {
  it('ao navegar para a tela de registro, rederiza todos os elementos em tela', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/register');

    const nameInput = screen.getByTestId(c.TESTID_REGISTER_NAME);
    const emailInput = screen.getByTestId(c.TESTID_REGISTER_EMAIL);
    const passwordInput = screen.getByTestId(c.TESTID_REGISTER_PASSWORD);
    const registerButton = screen.getByTestId(c.TESTID_REGISTER_BUTTON);

    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(registerButton).toBeInTheDocument()
  });

  it('a messagem /"name" length must be at least 12 characters long/ aparece quando é digitado um nome invalido', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('/register');

    const nameInput = screen.getByTestId(c.TESTID_REGISTER_NAME);

    userEvent.type(nameInput, c.INVALID_NAME);

    expect(await screen.findByText(c.ERR_INVALID_NAME)).toBeInTheDocument();
  });


  it('a messagem /"email" must be a valid email/ aparece quando o email é inválido', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('/register');

    const nameInput = screen.getByTestId(c.TESTID_REGISTER_NAME);
    const emailInput = screen.getByTestId(c.TESTID_REGISTER_EMAIL);

    userEvent.type(nameInput, c.VALID_NAME);
    userEvent.type(emailInput,c.INVALID_EMAIL);

    expect(await screen.findByText(c.ERR_INVALID_EMAIL)).toBeInTheDocument();
  });
  
  it('a messagem /"password" length must be at least 6 characters long/ aparece quando o nome e o email são válidos e a senha é inválida', async () => {
    const { history } = renderWithRouter(<App />);

    history.push('/register');

    const nameInput = screen.getByTestId(c.TESTID_REGISTER_NAME);
    const emailInput = screen.getByTestId(c.TESTID_REGISTER_EMAIL);
    const passwordInput = screen.getByTestId(c.TESTID_REGISTER_PASSWORD);

    userEvent.type(nameInput, c.VALID_NAME);
    userEvent.type(emailInput,c.VALID_EMAIL);
    userEvent.type(passwordInput,c.INVALID_PASS);

    expect(await screen.findByText(c.ERR_INVALID_PASS)).toBeInTheDocument();
  });
});
