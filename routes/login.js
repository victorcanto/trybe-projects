const express = require('express');

const router = express.Router();

const { authLoginMiddleware } = require('../middlewares/auth-login');

router.post('/', authLoginMiddleware);

module.exports = router;
