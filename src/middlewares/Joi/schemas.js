const Joi = require('joi');

const emptyField = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': emptyField,
  'any.required': emptyField,
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

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required()
    .items(Joi.number().integer().required()),
}).required().messages({
  'array.includesRequiredUnknowns': 'one or more "{{#key}}" not found',
  'any.required': emptyField,
  'any.empty': emptyField,
  'string.empty': emptyField,
});

module.exports = {
  loginSchema,
  createUserSchema,
  createCategorySchema,
  createPostSchema,
};
