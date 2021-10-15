const jwt = require('jsonwebtoken');

require('dotenv/config');

const createToken = (payload) => {
  const SECRET = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload }, SECRET, jwtConfig);
  return token;
};

const checkToken = (token) => {
  const SECRET = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, SECRET);
  return decoded;
};

module.exports = { createToken, checkToken };
