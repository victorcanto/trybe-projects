const { createInvalidDataErrorWithMessage } = require('../utils/createError');

const errorMsgs = {
  namelengthMsg: '"name" length must be at least 5 characters long',
  nameAlreadyExistsMsg: 'Product already exists',
  quantityLessThanOrEqualToZeroMsg: '"quantity" must be larger than or equal to 1',
  quantityIsStringMsg: '"quantity" must be a number',
};

const nameIsNotUnique = (data, name) => data.some((el) => el.name === name);
const nameLengthIsNotGreaterThan = (value, toCompare) => value.length < toCompare;
const quantityIsLessThanOrEqualToZero = (value) => value <= 0;
const quantityIsString = (value) => (typeof value === 'string');

const validateName = (products, name, callback) => {
  const { namelengthMsg, nameAlreadyExistsMsg } = errorMsgs;
  switch (true) {
    case nameLengthIsNotGreaterThan(name, 5):
      return callback(namelengthMsg);
    case nameIsNotUnique(products, name):
      return callback(nameAlreadyExistsMsg);
    default:
      return false;
  }
};

const validatequantity = (quantity, callback) => {
  const { quantityLessThanOrEqualToZeroMsg, quantityIsStringMsg } = errorMsgs;
  switch (true) {
    case quantityIsLessThanOrEqualToZero(quantity):
      return callback(quantityLessThanOrEqualToZeroMsg);
    case quantityIsString(quantity):
      return callback(quantityIsStringMsg);
    default:
      return false;
  }
};

const validate = (products, name, quantity) => {
  let result = validateName(products, name, createInvalidDataErrorWithMessage);

  if (!result) result = validatequantity(quantity, createInvalidDataErrorWithMessage);

  return result;
};

module.exports = {
  validate,
};
