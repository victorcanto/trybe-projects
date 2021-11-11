module.exports = (status, data, keyName) => {
  const obj = {};

  if (keyName === 'error') {
    obj.error = { message: data };
  } else {
    obj[keyName] = { [keyName]: data };
  }

  obj.status = status;
  return obj;
};
