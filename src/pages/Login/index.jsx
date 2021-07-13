import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import Logo from '../../images/tryFoods.png';

import styles from './login.module.scss';

function Login() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [isValidated, setIsValidated] = useState(false);

  const handleChange = ({ target: { value } }, setState) => {
    setState(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));

    history.push('/comidas');
  };

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const minimumLength = 6;
    const isEmailValid = regex.test(userEmail);
    const isPwdValid = userPwd.length > minimumLength;

    setIsValidated(isEmailValid && isPwdValid);
  }, [userEmail, userPwd]);

  return (
    <main className={ styles.container }>
      {/* <Logo /> */}
      <img src={ Logo } alt="Try Foods" className={ styles.logo } />

      <form className={ styles.loginSection }>
        <label htmlFor="email-input" className={ styles.userInput }>
          <input
            id="email-input"
            data-testid="email-input"
            value={ userEmail }
            onChange={ (event) => handleChange(event, setUserEmail) }
            type="text"
            placeholder="E-mail"
          />
        </label>

        <label htmlFor="password-input" className={ styles.userInput }>
          <input
            id="password-input"
            data-testid="password-input"
            value={ userPwd }
            onChange={ (event) => handleChange(event, setUserPwd) }
            type="password"
            placeholder="Password"
          />
        </label>

        <button
          data-testid="login-submit-btn"
          type="submit"
          onClick={ handleSubmit }
          disabled={ !isValidated }
        >
          <span>ENTRAR</span>
          {' '}
          <FiArrowRight size="1.5rem" />
        </button>
      </form>
    </main>
  );
}

export default Login;
