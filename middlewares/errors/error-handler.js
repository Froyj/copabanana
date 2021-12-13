const { ValidationError } = require('joi');
const logger = require('../../helpers/logger');
const util = require('util');

const errorHandler = (err, req, res) => {
  if (err instanceof ValidationError) {
    const validationErrors = err.details.map((e) => e.message);
    logger.error(
      `\n Payload validation error : ${validationErrors.join(
        ', '
      )}
      \n payload : ${util.inspect(req.body, true)}`
    );
    res.status(400).json({
      success: false,
      errors: validationErrors,
    });
  } else {
    logger.error(err.message);
    res.status(500).send('Oops, something broke!');
  }
};

module.exports = errorHandler;
