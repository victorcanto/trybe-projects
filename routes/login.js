const express = require('express');
const { AuthLogin } = require('../middlewares');
const { LoginController } = require('../controllers');

const router = express.Router();

router.post('/', AuthLogin, LoginController);

module.exports = router;
