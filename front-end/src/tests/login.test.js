import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import * as c from './constants';

describe('Login', () => {
  it('quando o usuário entrar na rota principal, é redirecionado para página de login', () => {
    const { history } = renderWithRouter(<App />);

    const {
      location: { pathname },
    } = history;

    expect(pathname).toBe('/login');
  });

  it('a messagem /"email" is required/ aparece quando preenchemos apenas a senha ', async () => {
    renderWithRouter(<App />);
    const passwordInput = screen.getByTestId(c.TESTID_LOGIN_PASS);

    userEvent.type(passwordInput, c.VALID_PASS);

    expect(await screen.findByText(c.ERR_REQUIRED_EMAIL)).toBeInTheDocument();
  });

  it('a messagem /"password" is required/ aparece quando o email é válido e a senha não é preenchida', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(c.TESTID_LOGIN_EMAIL);

    userEvent.type(emailInput, c.VALID_EMAIL);

    expect(await screen.findByText(c.ERR_REQUIRED_PASS)).toBeInTheDocument();
  });

  it('a messagem /"email" must be a valid email/ aparece quando o email é inválido', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(c.TESTID_LOGIN_EMAIL);

    userEvent.type(emailInput, c.INVALID_EMAIL);

    expect(await screen.findByText(c.ERR_INVALID_EMAIL)).toBeInTheDocument();
  });

  it('a messagem /"password" length must be at least 6 characters long/ aparece quando o email é válido e a senha é inválida', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(c.TESTID_LOGIN_EMAIL);
    const passwordInput = screen.getByTestId(c.TESTID_LOGIN_PASS);

    userEvent.type(emailInput, c.VALID_EMAIL);
    userEvent.type(passwordInput, c.INVALID_PASS);
    expect(await screen.findByText(c.ERR_INVALID_PASS)).toBeInTheDocument();
  });

  it('a messagem /"email" is not allowed to be empty/ aparece quando a senha é válida, mas o email está vazio', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(c.TESTID_LOGIN_EMAIL);

    act(() => {
      userEvent.type(emailInput, c.VALID_EMAIL);
      userEvent.clear(emailInput);
    });

    expect(await screen.findByText(c.ERR_EMPTY_EMAIL)).toBeInTheDocument();
  });

  it('a messagem /"password" is not allowed to be empty/ aparece quando o email é válido e a senha está vazia', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(c.TESTID_LOGIN_EMAIL);
    const passwordInput = screen.getByTestId(c.TESTID_LOGIN_PASS);

    userEvent.type(emailInput, c.VALID_EMAIL);
    userEvent.type(passwordInput, c.INVALID_PASS);
    userEvent.clear(passwordInput);
    expect(await screen.findByText(c.ERR_EMPTY_PASS)).toBeInTheDocument();
  });

  it('a messagem /"Invalid fields"/ aparece quando o email e senha são válidos, mas o usuário não está cadastrado', async () => {
    renderWithRouter(<App />);
    const emailInput = screen.getByTestId(c.TESTID_LOGIN_EMAIL);
    const passwordInput = screen.getByTestId(c.TESTID_LOGIN_PASS);
    const buttonLogin = screen.getByTestId(c.TESTID_LOGIN_BUTTON);
    act(() => {
      userEvent.type(emailInput, c.EMAIL_NOT_EXISTS);
      userEvent.type(passwordInput, c.PASS_NOT_EXISTS);
    });

    userEvent.click(buttonLogin);
    expect(
      await screen.findByTestId(c.TESTID_LOGIN_MSG_ERROR)
    ).toBeInTheDocument();
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

  it('quando os dados do usuário são válidos, é redirecionado para /customer/produtos', async () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId(c.TESTID_LOGIN_EMAIL);
    const passwordInput = screen.getByTestId(c.TESTID_LOGIN_PASS);
    const buttonLogin = screen.getByTestId(c.TESTID_LOGIN_BUTTON);

    act(() => {
      userEvent.type(emailInput, c.VALID_EMAIL);
      userEvent.type(passwordInput, c.VALID_PASS);
      userEvent.click(buttonLogin);
    });

    const {
      location: { pathname },
    } = history;

    setTimeout(() => {
      expect(pathname).toBe('/customer/produtos');
    }, 1000);
  });
});
