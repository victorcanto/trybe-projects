const jwt = require('jsonwebtoken');

require('dotenv/config');

const SECRET = process.env.JWT_SECRET;

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
