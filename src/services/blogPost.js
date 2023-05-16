const sequelize = require('../transactions');

const { BlogPost, PostCategory } = require('../models');

// #3
const createPostCategory = async (categoryIds, postId, t) => {
  const postCategories = categoryIds
    .map((categoryId) => ({ postId, categoryId }));
  
  await PostCategory.bulkCreate(postCategories, { transaction: t });
};

// #2
const createPost = async (title, content, userId, t) => {
  const [newPost] = await BlogPost
  .findOrCreate({ 
    where: { title, content, userId },
    defaults: { published: new Date(), updated: new Date() },
    transaction: t, 
  });

  return newPost;
};

// #1 chama createPost e createPostCategory
const findOrCreatePost = async ({ title, content, categoryIds }, userId) => {
  const result = await sequelize.transaction(async (t) => {
    const newPost = await createPost(title, content, userId, t);
    
    await createPostCategory(categoryIds, newPost.id, t);
  
    return newPost;
  });

  return result;
};

module.exports = {
  findOrCreatePost,
};