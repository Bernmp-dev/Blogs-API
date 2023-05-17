const { blogPostService } = require('../services');
const { updatePostSchema } = require('./Joi/schemas');

module.exports = async (req, res, next) => {
  const { userId, params: { id }, body } = req;
  const { user } = await blogPostService.listPostsById(id);

  if (userId !== user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  const { error } = updatePostSchema.validate(body);
  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }

next();
};
