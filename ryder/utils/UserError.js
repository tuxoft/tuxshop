class UserError extends Error {
  constructor(...args) {
    super(...args);

    this.name = 'Error';
    this.message = args[0];
    this.type = args[1];

    Error.captureStackTrace(this, 'Error');
  }
}

module.exports = UserError;