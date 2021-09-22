const { StatusCode } = require('../constants');

exports.errors = {
  invalidEntries: { 
    code: StatusCode.BAD_REQUEST, 
    error: { message: 'Invalid entries. Try again.' }, 
  },
  emailAlreadyRegistered: { 
    code: StatusCode.CONFLICT, 
    error: { message: 'Email already registered' }, 
  },
};

exports.isEmpty = (value) => !value;
exports.isNotString = (value) => typeof value !== 'string';