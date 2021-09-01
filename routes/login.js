const express = require('express');

const router = express.Router();

const { authLogin } = require('../middlewares/auth-login');

router.post('/', authLogin);

module.exports = router;
