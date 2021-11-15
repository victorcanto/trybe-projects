const jwt = require('jsonwebtoken');
const getSecretKey = require('./getSecretKey');

require('dotenv/config');

const SECRET = getSecretKey();

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payload }, SECRET, jwtConfig);
  return token;
};

const checkToken = (token) => {
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};

module.exports = { createToken, checkToken };
