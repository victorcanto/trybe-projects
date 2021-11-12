const fs = require('fs');

const getSecretKey = () => {
  const keyFile = fs.readFileSync('jwt.evaluation.key', 'utf-8');

  return keyFile;
}

module.exports = getSecretKey
