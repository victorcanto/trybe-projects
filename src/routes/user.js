const express = require('express');
const { AuthUser, AuthToken } = require('../middlewares');
const { UserController } = require('../controllers');

const router = express.Router();

router.post('/', AuthUser, UserController.createUser);
router.get('/', AuthToken, UserController.listUsers);
router.get('/:id', AuthToken, UserController.listUserById);
router.delete('/me', AuthToken, UserController.deleteMe);

module.exports = router;
