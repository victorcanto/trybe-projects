const jwt = require('jsonwebtoken');

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
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  const emailIsValid = regex.test(email);

  if (!emailIsValid) {
  return res.status(400).json({
    message: 'O "email" deve ter o formato "email@email.com"',
    }); 
  }
}

function validatePassword(password, res) {
  if (!password || password.length === 0) {
    return res.status(400).json({
    message: 'O campo "password" é obrigatório',
    }); 
  }

  const passwordIsValid = password.length >= 6;

  if (!passwordIsValid) {
    return res.status(400).json({
      message: 'O "password" deve ter pelo menos 6 caracteres',
    });
  }
}

function authLoginMiddleware(req, res) {
  const { email, password } = req.body;

  validateEmail(email, res);
  validatePassword(password, res);

  const token = getToken(
    qtdOfCaracteresJwt,
    email,
    password,
  ); /* params => qtdCaracteres, other agurments */
  return res.status(200).json({ token });
}

module.exports = { authLoginMiddleware };
// Source Ref:
// Validate email: https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
