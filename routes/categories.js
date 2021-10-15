const express = require('express');
const { AuthCategory, AuthToken } = require('../middlewares');
const { CategoryController } = require('../controllers');

const router = express.Router();

router.post('/', AuthToken, AuthCategory, CategoryController.createCategory);
router.get('/', AuthToken, CategoryController.listCategories);

module.exports = router;
