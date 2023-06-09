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

const listPostsById = async ({ params: { id } }, res) => {
  try {
    const postById = await blogPostService.listPostsById(id);
    res.status(200).json(postById);
  } catch ({ message }) {
    res.status(404).json({ message });
  }
};

const updatePost = async ({ params: { id }, body }, res) => {
  try {
    const updatedPost = await blogPostService.updatePost(id, body);
    res.status(200).json(updatedPost);
  } catch ({ message }) {
    res.status(401).json({ message });
  }
};

const deletePost = async ({ params: { id } }, res) => {
  try {
    await blogPostService.deletePost(id);
    res.sendStatus(204);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

const listBySearch = async ({ query: { q } }, res) => {
  try {
    const result = await blogPostService.listBySearch(q);
    res.status(200).json(result);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

module.exports = {
  createPost,
  listPosts,
  listPostsById,
  updatePost,
  deletePost,
  listBySearch,
};