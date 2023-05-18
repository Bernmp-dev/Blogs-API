const { blogPostService } = require('../services');

module.exports = async ({ userId, params: { id } }, res, next) => {
  try {
    const response = await blogPostService.listPostsById(id);
   
    const { user } = response;
  
    if (userId !== user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    next();
  } catch ({ type, message }) {
    return res.status(type).json({ message });
  }
};
