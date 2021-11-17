const { Router } = require('express');
const { loginController, userController, productController } = require('../controllers');

const router = Router();

// User
router.post('/user', userController.create);
router.get('/user', userController.show);
// Login
router.post('/login', loginController.login);
// Products
router.post('/products', productController.create);
router.get('/products', productController.index);

module.exports = router;
