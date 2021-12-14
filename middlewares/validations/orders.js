const Joi = require('joi');

const orderCreationSchema = Joi.object({
  userId: Joi.number().precision(0).required(),
  dishId: Joi.number().precision(0).required(),
  quantity: Joi.number().precision(0).required(),
});

const orderUpdateSchema = Joi.object({
  status: Joi.string(),
  quantity: Joi.number().precision(0),
});

const orderCreationValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = orderCreationSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

const orderUpdateValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = orderUpdateSchema.validate(payload, { abortEarly: false });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

module.exports = { orderCreationValidation, orderUpdateValidation };
