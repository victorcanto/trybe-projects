const jwt = require('jsonwebtoken');

const { HTTP_OK_STATUS, HTTP_BAD_REQUEST_STATUS } = require('../constants');

const qtdOfCaracteresJwt = 16;

function getToken(qtdCaracteres, ...args) {
  const secret = 'shhhhh';
  const tokenJwt = jwt.sign({ args }, secret);
  const newToken = tokenJwt.slice(0, qtdCaracteres);
  return newToken;
}

function validateEmail(email, res) {
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (!email || email.length === 0) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  const emailIsValid = regex.test(email);

  if (!emailIsValid) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }
}

function validatePassword(password, res) {
  if (!password || password.length === 0) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O campo "password" é obrigatório',
    });
  }

  const passwordIsValid = password.length >= 6;

  if (!passwordIsValid) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
}

function authLogin(req, res) {
  const { email, password } = req.body;

  validateEmail(email, res);
  validatePassword(password, res);

  const token = getToken(
    qtdOfCaracteresJwt,
    email,
    password,
  ); /* params => qtdCaracteres, other agurments */
  return res.status(HTTP_OK_STATUS).json({ token });
}

module.exports = { authLogin };
// Source Ref:
// Validate email: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
