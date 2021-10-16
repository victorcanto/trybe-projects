const { PostService } = require('../services');

const createPost = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const { title, content, categoryIds } = req.body;
    const createdPost = await PostService.createPost({
      title,
      content,
      categoryIds,
      userId,
    });
    res.status(201).json(createdPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const listPosts = async (req, res) => {
  const posts = await PostService.findAllPosts();
  res.status(200).json(posts);
};

const listPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await PostService.findPostById(id);
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const listPostBySearchTerm = async (req, res, next) => {
  try {
    const { q } = req.query;
    const searchResult = await PostService.findPostBySearchTerm(q);
    res.status(200).json(searchResult);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const editPostById = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { id: userId } = req.user;
    const { title, content } = req.body;
    const updatedPost = await PostService.updatePostById(
      { title, content },
      postId,
      userId,
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deletePostById = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { id: userId } = req.user;
    const { status } = await PostService.deletePostById(postId, userId);
    res.status(status).json();
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  createPost,
  listPosts,
  listPostById,
  listPostBySearchTerm,
  editPostById,
  deletePostById,
};
