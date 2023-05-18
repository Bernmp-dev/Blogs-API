const { Op } = require('sequelize');
const { User, BlogPost, PostCategory, sequelize, Category } = require('../models');

const findOrCreatePost = async ({ title, content, categoryIds }, userId) => {
  const result = await sequelize.transaction(async (t) => {
    const [newPost] = await BlogPost
    .findOrCreate({ 
      where: { title, content, userId },
      defaults: { published: new Date(), updated: new Date() },
      transaction: t, 
    });
   
    const postCategories = categoryIds
    .map((categoryId) => ({ postId: newPost.id, categoryId }));
  
  await PostCategory.bulkCreate(postCategories, { transaction: t });
  
    return newPost;
  });

  return result;
};

const listPosts = async () => {
  const result = await sequelize.transaction(async (t) => {
    const postsList = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
      transaction: t });

    return postsList;
  });

  return result;
};

const listPostsById = async (id) => {
  const result = await sequelize.transaction(async (t) => {
    const postById = await BlogPost.findByPk(id, {
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ],
      transaction: t });

      return postById;
    });

    if (!result) {
      const error = new Error('Post does not exist');
      error.type = 404;
      throw error;
    }

  return result;
};

const updatePost = async (id, { title, content }) => {
  const result = await sequelize.transaction(async (t) => {
  await BlogPost.update(
    { title, content },
    { where: { id } },
    { transaction: t },
  );

  const updatedPost = await listPostsById(id);
  
  return updatedPost;
});

 return result;
};

const deletePost = async (id) => {
  await sequelize.transaction(async (t) => {
    await BlogPost.destroy({ where: { id } }, { transaction: t });
  });
};

const listBySearch = async (searchTerm) => {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${searchTerm}%` } },
          { content: { [Op.like]: `%${searchTerm}%` } },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
      transaction: t });

    return post;
  });

  return result;
};

module.exports = {
  findOrCreatePost,
  listPosts,
  listPostsById,
  updatePost,
  deletePost,
  listBySearch,
};