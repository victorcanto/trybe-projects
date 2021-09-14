const { createInvalidDataErrorWithMessage } = require('../utils/createError');

const quantityIsLessThanOrEqualToZero = (value) => value <= 0;
const quantityIsString = (value) => (typeof value === 'string');

const checkIDs = (sales, products) => {
  const productIds = products.map(({ _id }) => String(_id));

  const result = sales.every(({ productId }) => productIds.includes(productId));
  return result;
};

const validateQuantify = (quantity) => {
  const errorMessage = 'Wrong product ID or invalid quantity';

  switch (true) {
    case quantityIsLessThanOrEqualToZero(quantity):
      return createInvalidDataErrorWithMessage(errorMessage);
    case quantityIsString(quantity):
      return createInvalidDataErrorWithMessage(errorMessage);
    default:
      return false;
  }
};

const validate = (salesArray, productsArray) => {
  const idIsValid = checkIDs(salesArray, productsArray);

  if (!idIsValid) return {};

  let result;

  salesArray.forEach(({ quantity }) => {
    result = validateQuantify(quantity);
  });

  return result;
};

module.exports = {
  validate,
};
