const CustomError = require('./CustomError');

const handleError = (err, res) => {
  if (err instanceof CustomError) {
    const { statusCode, message } = err;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message
    }); 
  } else {
    res.status(500).json({
      status: "error",
      status: 500,
      message: 'Oops ! it seems that we encountered some difficulties !'
    }); 
  }
};

module.exports = handleError;