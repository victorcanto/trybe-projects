import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import userEvent from '@testing-library/user-event';
import * as c from './constants';

describe('Login', () => {
  it('quando o usuário entrar na rota principal, é redirecionado para página de login', () => {
    const { history } = renderWithRouter(<App />);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe('/login');
  });

  it('a messagem /"email" is required/ aparece quando os inputs não estão preenchidos ', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.click(buttonLogin);
    expect(await screen.findByText(c.ERR_REQUIRED_EMAIL)).toBeInTheDocument();
  });

  it('a messagem /"password" is required/ aparece quando o email é válido e a senha não é preenchida', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.type(emailInput, c.VALID_EMAIL);
    userEvent.click(buttonLogin);
    expect(await screen.findByText(c.ERR_REQUIRED_PASS)).toBeInTheDocument();
  });

  it('a messagem /"email" must be a valid email/ aparece quando o email é inválido', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.type(emailInput, c.INVALID_EMAIL);
    userEvent.click(buttonLogin);
    expect(await screen.findByText(c.ERR_INVALID_EMAIL)).toBeInTheDocument();
  });

  it('a messagem /"password" length must be at least 6 characters long/ aparece quando o email é válido e a senha é inválida', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.type(emailInput, c.VALID_EMAIL);
    userEvent.type(passwordInput, c.INVALID_PASS);
    userEvent.click(buttonLogin);
    expect(await screen.findByText(c.ERR_INVALID_PASS)).toBeInTheDocument();
  });

  it('a messagem /"email" is not allowed to be empty/ aparece quando a senha é válida, mas o email está vazio', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.type(emailInput, c.VALID_EMAIL);
    userEvent.clear(emailInput);
    userEvent.click(buttonLogin);
    expect(await screen.findByText(c.ERR_EMPTY_EMAIL)).toBeInTheDocument();
  });

  it('a messagem /"password" is not allowed to be empty/ aparece quando o email é válido e a senha está vazia', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.type(emailInput, c.VALID_EMAIL);
    userEvent.type(passwordInput, c.VALID_PASS);
    userEvent.clear(passwordInput);
    userEvent.click(buttonLogin);
    expect(await screen.findByText(c.ERR_EMPTY_PASS)).toBeInTheDocument();
  });

  it('a messagem /"Invalid fields"/ aparece quando o email e senha são válidos, mas o usuário não está cadastrado', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.type(emailInput, c.EMAIL_NOT_EXISTS);
    userEvent.type(passwordInput, c.PASS_NOT_EXISTS);
    userEvent.click(buttonLogin);
    expect(await screen.findByText(c.ERR_INVALID_FIELDS)).toBeInTheDocument();
  });

  it('quando o usuário clicar no botão de criar sua conta, será redirecionado para /register', () => {
    const { history } = renderWithRouter(<App />);

    const buttonRegister = screen.getByText(/Ainda não tenho conta/i);
    userEvent.click(buttonRegister);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe('/register');
  });

  it('com os campos preenchidos corretamente, é redirecionado para página de produtos', async () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByPlaceholderText('email@tryber.com.br');
    const passwordInput = screen.getByPlaceholderText('******');
    const buttonLogin = screen.getByText(/Login/i);

    userEvent.type(emailInput, c.VALID_EMAIL);
    userEvent.type(passwordInput, c.VALID_PASS);
    userEvent.click(buttonLogin);

    expect(await screen.findByText('Produtos')).toBeInTheDocument();
  });
});
