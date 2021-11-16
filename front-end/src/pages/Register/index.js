import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import ErrorMsg from '../../components/ErrorMsg';
import Form from '../../components/Form';
import useForm from '../../hooks/useForm';
import StyledRegister from './styles';
import { requestRegisterUser } from '../../services/api';
import { useUser } from '../../contexts/userContext';

const NAME_LENGTH = 12;
const PASSWORD_LENGTH = 6;

const Register = () => {
  const history = useHistory();
  const [{ values }, handleChange, handleSubmit] = useForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const { user, setUser } = useUser();

  const clearInputs = () => {
    inputName.current.value = '';
    inputEmail.current.value = '';
    inputPassword.current.value = '';
  };

  const handleRegister = async () => {
    clearInputs();

    const registerUserResponse = await requestRegisterUser(values);

    localStorage.setItem('user', JSON.stringify(registerUserResponse));

    setUser(userInfo);

    if (registerUserResponse.message) {
      clearInputs();
      setErrorMsg(result.message);
    }

    setUser(result);
  };

  useEffect(() => {
    if (user && user.token) {
      history.push('/customer/products');
    }
  }, [history, user]);

  const request = useCallback(
    async () => {
      let message = '';
      let disabled = true;

      if (Object.keys(values).length) {
        const result = await requestRegisterUser(values);
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
    },
    [values],
  );

  const isInvalidFields = useCallback(
    async () => {
      const emailRegex = /^\S+@\S+\.\S+$/;

      if (values.name
        && values.name.length < NAME_LENGTH) {
        return true;
      }

      if (values.email && !emailRegex.test(values.email)) {
        return true;
      }

      if (values.password
        && values.password.length < PASSWORD_LENGTH) {
        return true;
      }

      return false;
    },
    [values],
  );

  useEffect(() => {
    const checkInvalidFields = async () => {
      const isInvalid = await isInvalidFields();

      if (isInvalid) {
        request();
      }

      if (values.name
        && values.name.length >= NAME_LENGTH
        && values.email
        && values.email.length
        && values.password
        && values.password.length >= PASSWORD_LENGTH) {
        setIsDisabled(false);
        setErrorMsg('');
      }
    };

    checkInvalidFields();
  },
  [isInvalidFields, request, values]);

  return (
    <StyledRegister>
      <Form onSubmit={ handleSubmit(handleRegister) }>
        <label htmlFor="name">
          <input
            ref={ inputName }
            data-testid="common_register__input-name"
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          <input
            ref={ inputEmail }
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
            id="password"
            name="password"
            type="password"
            placeholder="******"
            onChange={ handleChange }
          />
        </label>
        <Button
          disabled={ isDisabled }
          data-testid="common_register__button-register"
          type="submit"
        >
          Cadastrar
        </Button>
        {errorMsg && (
          <ErrorMsg data-testid="common_register__element-invalid_register">
            {errorMsg}
          </ErrorMsg>
        )}
      </Form>
    </StyledRegister>
  );
};

export default Register;
