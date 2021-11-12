const { Router } = require('express');
const { loginController, userController, productController } = require('../controllers');

const router = Router();

// User
router.post('/user', userController.create);
// Login
router.post('/login', loginController.login);
// Products
router.post('/products', productController.create);

module.exports = router;
