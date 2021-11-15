const { Router } = require('express');
const { loginController, userController } = require('../controllers');

const router = Router();

// User
router.post('/user', userController.create);
// Login
router.post('/login', loginController.login);

module.exports = router;
