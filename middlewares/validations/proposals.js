const Joi = require('joi');

const proposalCreationSchema = Joi.object({
  limitDate: Joi.date().required(),
  remainingQuantity: Joi.number().precision(0).required(),
  deliveryDate: Joi.date().required(),
  dishId: Joi.number().precision(0).required()
});

const proposalUpdateSchema = Joi.object({
  limitDate: Joi.date(),
  remainingQuantity: Joi.number().precision(0),
  deliveryDate: Joi.date(),
  dishId: Joi.number().precision(0),
});

const proposalCreationValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = proposalCreationSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

const proposalUpdateValidation = (req, res, next) => {
  const payload = req.body;
  const { error, value } = proposalUpdateSchema.validate(payload, { abortEarly: false });
  if (error) {
    next(error);
  } else {
    req.body = value;
    next();
  }
};

module.exports = { proposalCreationValidation, proposalUpdateValidation };
