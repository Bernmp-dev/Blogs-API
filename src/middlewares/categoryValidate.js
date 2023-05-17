const Joi = require('joi');

module.exports = async ({ body: category }, res, next) => {
  const { error } = Joi.object({
    name: Joi.string().min(1).required(),
    
  }).required().messages({
    'string.min': '"{{#key}}" length must be at least {{#limit}} characters long',
    'string.empty': '"{{#key}}" is required',
    'any.required': '"{{#key}}" is required',

  }).validate(category);

  if (error) {
    const { message } = error;
    return res.status(400).json({ message });
  }

  next();
};