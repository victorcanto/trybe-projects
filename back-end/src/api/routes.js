const { Router } = require('express');
const { loginController, userController, saleController } = require('../controllers');
const authToken = require('../middlewares/authToken');

const router = Router();

// User
router.post('/user', userController.create);
// Login
router.post('/login', loginController.login);
// Sales
router.get('/sales', authToken, saleController.getAll);

module.exports = router;
