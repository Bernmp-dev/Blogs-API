const { blogPostService } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const { userId, params: { id } } = req;
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
