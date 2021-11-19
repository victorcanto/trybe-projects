const { Router } = require('express');
const { 
  loginController, 
  userController, 
  saleController, 
  productController } = require('../controllers');
const authToken = require('../middlewares/authToken');

const router = Router();

// User
router.get('/users/:role', userController.getAll);
router.get('/users', userController.getAll);
router.post('/user', userController.create);
router.get('/user', userController.show);
// Login
router.post('/login', loginController.login);
// Products
router.post('/products', productController.create);
router.get('/products', productController.index);
// Sales
router.get('/sales', authToken, saleController.getAll);
router.get('/sales/:id', authToken, saleController.show);
router.post('/sales', authToken, saleController.create);

module.exports = router;
