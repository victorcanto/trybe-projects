const express = require('express');
const { AuthPost, AuthToken } = require('../middlewares');
const { PostController } = require('../controllers');

const router = express.Router();

router.post('/', AuthToken, AuthPost.isPost, PostController.createPost);
router.get('/', AuthToken, PostController.listPosts);
router.get('/search', AuthToken, PostController.listPostBySearchTerm);
router.get('/:id', AuthToken, PostController.listPostById);
router.put('/:id', AuthToken, AuthPost.isPut, PostController.editPostById);
router.delete('/:id', AuthToken, PostController.deletePostById);

module.exports = router;
