const Joi = require('joi');
const { userService } = require('../services');

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().optional(),
}).required().messages({
  'string.min': '"{{#key}}" length must be at least {{#limit}} characters long',
  'string.email': '"{{#key}}" must be a valid email',
  'string.empty': '"{{#key}}" field is required',
  'any.required': '"{{#key}}" field is required',
});

module.exports = async ({ body }, res, next) => {
  const { error } = createUserSchema.validate(body);

  if (error) {
    const { message } = error;
    return res.status(400).json({ message });
  }

  const emailRegistered = await userService.findByEmail(body);

  if (emailRegistered) {
    return res.status(409).json({ message: 'User already registered' });
  }

  return next();
};
