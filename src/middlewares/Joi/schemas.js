const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
  'string.base': '{{#key}} must be a string',
});

module.exports = {
  loginSchema,
};
