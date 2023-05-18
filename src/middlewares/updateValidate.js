const Joi = require('joi');

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).required().messages({
  'any.required': 'Some required fields are missing',
  'any.empty': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = async (req, res, next) => {
  const { error } = updatePostSchema.validate(req.body);

  if (error) {
    const { message } = error;
    return res.status(400).json({ message });
  }
  
next();
};
