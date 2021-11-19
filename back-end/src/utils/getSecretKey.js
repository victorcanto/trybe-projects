const fs = require('fs');

const getSecretKey = () => {
  const keyFile = fs.readFileSync('jwt.evaluation.key', 'utf-8');
  return keyFile.trim();
};

module.exports = getSecretKey;
