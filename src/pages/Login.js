import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            data-testid="email-input"
            type="email"
            name="user_email"
            id="user_email"
            placeholder="Digite seu e-mail"
          />
          <input
            data-testid="password-input"
            type="password"
            name="user_password"
            id="user_password"
            placeholder="Digite sua senha"
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
