const Joi = require('joi');
const { blogPostService } = require('../services');

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).required().messages({
  'any.required': 'Some required fields are missing',
  'any.empty': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
});

module.exports = async (req, res, next) => {
  const { userId, params: { id }, body } = req;
  const { user } = await blogPostService.listPostsById(id);

  if (+userId !== +user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const { error } = updatePostSchema.validate(body);
  if (error) {
    const { message } = error;
    return res.status(400).json({ message });
  }

next();
};
