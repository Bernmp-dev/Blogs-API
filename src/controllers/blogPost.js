const { blogPostService } = require('../services');

const createPost = async ({ body, userId }, res) => {
  try {
    const newPost = await blogPostService.findOrCreatePost(body, userId);
    res.status(201).json(newPost);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

const listPosts = async (req, res) => {
  try {
    const postsList = await blogPostService.listPosts();
    res.status(200).json(postsList);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
};

module.exports = {
  createPost,
  listPosts,
};