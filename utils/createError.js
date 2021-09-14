const codeErrors = {
  invalidData: 'invalid_data',
  notFound: 'not_found',
};

const createError = (code) => (message) => ({ message: { err: { code, message } } });
const createInvalidDataErrorWithMessage = createError(codeErrors.invalidData);
const createNotFoundErrorWithMessage = createError(codeErrors.notFound);

module.exports = {
  createError,
  createInvalidDataErrorWithMessage,
  createNotFoundErrorWithMessage,
};
