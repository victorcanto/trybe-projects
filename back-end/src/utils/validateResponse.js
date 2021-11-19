module.exports = (status, data, keyName) => {
  const obj = {};

  if (keyName === 'error') {
    obj.error = { message: data };
  } else if (data) {
    obj[keyName] = { [keyName]: data };
  }

  obj.status = status;

  return obj;
};
