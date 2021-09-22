const { isEmpty, isNotString, errors } = require('./functions');

const emailIsNotUnique = (email, users) => users.some((user) => user.email === email);
const emailIsNotValid = (email) => {
  const re = /\S+@\S+\.\S+/;
  return !re.test(email);
};

const validateName = (name) => {
  if (isEmpty(name) || isNotString(name)) return errors.invalidEntries;
  return false;
};

const validateEmail = (email, users) => {
  switch (true) {
    case isEmpty(email) || isNotString(email) || emailIsNotValid(email):
      return errors.invalidEntries;
    case emailIsNotUnique(email, users):
      return errors.emailAlreadyRegistered;
    default:
     return false;
  }
};

const validatePassword = (password) => {
  if (isEmpty(password) || isNotString(password)) {
    return errors.invalidEntries;
  } 
  return false;
};

const validate = ({ name, email, password }, allUsers) => {
  let result = validateName(name);

  if (!result) result = validateEmail(email, allUsers);
  if (!result) result = validatePassword(password);

  return result;
};

module.exports = { validate }; 