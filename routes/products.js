const { Router } = require('express');
const productsController = require('../controllers/productsController');
const productsMiddleware = require('../middlewares/productsMiddleware');

const router = Router();

router.post('/', productsMiddleware.validate, productsController.register);

module.exports = router;
