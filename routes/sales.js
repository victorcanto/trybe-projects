const { Router } = require('express');
const salesController = require('../controllers/salesController');
const salesMiddleware = require('../middlewares/salesMiddleware');

const router = Router();

router.post('/', salesMiddleware.validate, salesController.register);

module.exports = router;
