const Joi = require('joi');

const dishCreationSchema = Joi.object({
  name: Joi.string().alphanum().max(255).required(),
  description: Joi.string(),
});

const dishUpdateSchema = Joi.object({
  name: Joi.string().alphanum().max(255),
  description: Joi.string(),
});

const dishCreationValidation = (req, res, next) => {
  const payload = req.body;
  const { error } = dishCreationSchema.validate(payload, {
    abortEarly: false,
  });
  if (error) {
    next(error);
  } else {
    next();
  }
};

const dishUpdateValidation = (req, res, next) => {
  const payload = req.body;
  const { error } = dishUpdateSchema.validate(payload, { abortEarly: false });
  if (error) {
    next(error);
  } else {
    next();
  }
};

module.exports = { dishCreationValidation, dishUpdateValidation };
