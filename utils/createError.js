const codeErrors = {
  invalidData: 'invalid_data',
};

const createError = (code) => (message) => ({ message: { err: { code, message } } });
const createInvalidDataErrorWithMessage = createError(codeErrors.invalidData);

module.exports = {
  createError,
  createInvalidDataErrorWithMessage,
};
