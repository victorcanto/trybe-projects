const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');
const { ValidateError, ErrorMessages } = require('../utils');

const checkCategoryIds = async (categoryIds) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });
  return categories.length !== categoryIds.length ? null : categories;
};

const checkPostCreator = async (postId, userId) => {
  const post = await BlogPost.findByPk(postId);
  if (!post) {
    throw ValidateError(404, ErrorMessages.POST_NOT_EXISTS);
  }

  const isPostCreator = post.userId === userId;
  if (!isPostCreator) {
    throw ValidateError(401, ErrorMessages.UNAUTHORIZED_USER);
  }
};

const createPost = async ({ title, content, categoryIds, userId }) => {
  const categories = await checkCategoryIds(categoryIds);

  if (!categories) {
    throw ValidateError(400, ErrorMessages.CATEGORY_IDS_NOT_FOUND);
  }

  const createdPost = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId,
  });
  return createdPost;
};

const findAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const findPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  if (!post) {
    throw ValidateError(404, ErrorMessages.POST_NOT_EXISTS);
  }

  return post;
};

const findPostBySearchTerm = async (searchTerm) => {
  if (!searchTerm) {
    return findAllPosts();
  }

  const searchResult = await BlogPost.findAll({
    where: { 
      [Op.or]: [{ title: searchTerm }, { content: searchTerm }],
    },
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  return searchResult || [];
};

const updatePostById = async ({ title, content }, postId, userId) => {
  await checkPostCreator(postId, userId);

  const [updatedPost] = await BlogPost.update(
    { title, content },
    { where: { id: postId } },
  );

  if (updatedPost) {
    return BlogPost.findByPk(postId, {
      include: { model: Category, as: 'categories' },
    });
  }
  return { title, content };
};

const deletePostById = async (postId, userId) => {
  await checkPostCreator(postId, userId);

  const deletedPost = await BlogPost.destroy({ where: { id: postId } });

  if (deletedPost) {
    return { status: 204 };
  }
};

module.exports = {
  createPost,
  findAllPosts,
  findPostById,
  updatePostById,
  deletePostById,
  findPostBySearchTerm,
};

// Source Ref: https://sequelize.org/master/manual/model-querying-basics.html#specifying-attributes-for-select-queries
