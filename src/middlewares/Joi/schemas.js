const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
  'string.base': '{{#key}} must be a string',
});

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

const createCategorySchema = Joi.object({
  name: Joi.string().min(1).required(),
}).required().messages({
  'string.min': '"{{#key}}" length must be at least {{#limit}} characters long',
  'string.empty': '"{{#key}}" is required',
  'any.required': '"{{#key}}" is required',
});

module.exports = {
  loginSchema,
  createUserSchema,
  createCategorySchema,
};
