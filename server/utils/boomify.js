const boomify = (statusCode, message) => {
  const error = new Error();
  error.message = message;
  error.status = statusCode;
  return error;
};

module.exports = boomify;
