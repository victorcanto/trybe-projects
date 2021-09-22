const { isEmpty, isNotString, errors } = require('./functions');

const validate = (field) => {
  const fieldIsNotValid = isEmpty(field) || isNotString(field);
  if (fieldIsNotValid) return errors.invalidEntries;
  return false;
};

const validateFields = ({ name, ingredients, preparation }) => {
  let result = validate(name);

  if (!result) result = validate(ingredients);
  if (!result) result = validate(preparation);
  
  return result;
};

module.exports = { validateFields };