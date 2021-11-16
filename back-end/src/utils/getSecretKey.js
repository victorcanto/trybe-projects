const fs = require('fs');

const getSecretKey = () => {
  const keyFile = fs.readFileSync('jwt.evaluation.key', 'utf-8');

  console.log('', keyFile);

  return keyFile.trim();
};

module.exports = getSecretKey;
