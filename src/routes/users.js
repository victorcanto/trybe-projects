const { Router } = require('express');
const middlewares = require('../middlewares');
const userController = require('../controllers/users');

const router = Router();

router.post('/', middlewares.authUser, userController.createUser);

module.exports = router;
