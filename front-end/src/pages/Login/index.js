import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import ErrorMsg from '../../components/ErrorMsg';
import Loading from '../../components/Loading';
import Form from '../../components/Form';
import StyledLogin from './styles';
import requestLogin from '../../services/api';
import useForm from '../../hooks/useForm';

const Login = () => {
  const history = useHistory();
  const [{ values, loading }, handleChange, handleSubmit] = useForm();
  const [isError, setIsError] = useState('');

  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const clearInputs = () => {
    inputEmail.current.value = '';
    inputPassword.current.value = '';
  };

  const request = async () => {
    const result = await requestLogin(values);
    if (result.message) {
      setIsError(result.message);
      const FIVE_SECONDS = 5000;
      setTimeout(() => {
        setIsError('');
      }, FIVE_SECONDS);
      clearInputs();
    } else {
      history.push('/customer/products');
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLogin>
          <img src="" alt="logo" />
          <Form onSubmit={ handleSubmit(request) }>
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
            <Button data-testid="common_login__button-register" type="submit">
              Login
            </Button>
            <ButtonLink url="register">Ainda não tenho conta</ButtonLink>
            {isError && (
              <ErrorMsg data-testid="common_login__element-invalid-email">
                {isError}
              </ErrorMsg>
            )}
          </Form>
        </StyledLogin>
      )}
      );
    </>
  );
};

export default Login;
