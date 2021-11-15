import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import ErrorMsg from '../../components/ErrorMsg';
import Form from '../../components/Form';
import StyledLogin from './styles';
import { requestLogin } from '../../services/api';
import useForm from '../../hooks/useForm';

const Login = () => {
  const history = useHistory();
  const [{ values }, handleChange, handleSubmit] = useForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const clearInputs = () => {
    inputEmail.current.value = '';
    inputPassword.current.value = '';
  };

  const goToProductsPage = async () => {
    const result = await requestLogin(values);
    if (!result.token) {
      return setErrorMsg(result.message);
    }
    clearInputs();
    history.push('/customer/products');
  };

  useEffect(() => {
    let message = '';
    let disabled = true;
    const request = async () => {
      if (Object.keys(values).length) {
        const result = await requestLogin(values);
        if (result.message !== 'Invalid fields' && !result.token) {
          message = result.message;
          disabled = true;
        } else {
          message = '';
          disabled = false;
        }
      }
      setErrorMsg(message);
      setIsDisabled(disabled);
    };
    request();
  }, [values]);

  return (
    <StyledLogin>
      <img src="" alt="logo" />
      <Form onSubmit={ handleSubmit(goToProductsPage) }>
        <label htmlFor="email">
          <input
            ref={ inputEmail }
            data-testid="common_login__input-email"
            id="email"
            name="email"
            type="text"
            placeholder="email@tryber.com.br"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            ref={ inputPassword }
            data-testid="common_login__input-password"
            id="password"
            name="password"
            type="password"
            placeholder="******"
            onChange={ handleChange }
          />
        </label>
        <Button
          disabled={ isDisabled }
          data-testid="common_login__button-login"
          type="submit"
        >
          Login
        </Button>
        <ButtonLink data-testid="common_login__button-register" url="register">
          Ainda não tenho conta
        </ButtonLink>
        {errorMsg && (
          <ErrorMsg data-testid="common_login__element-invalid-email">
            {errorMsg}
          </ErrorMsg>
        )}
      </Form>
    </StyledLogin>
  );
};

export default Login;
