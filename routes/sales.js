const { Router } = require('express');
const salesController = require('../controllers/salesController');
const salesMiddleware = require('../middlewares/salesMiddleware');

const router = Router();

router.post('/', salesMiddleware.validate, salesController.register);
router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
router.put('/:id', salesMiddleware.validate, salesController.update);
router.delete('/:id', salesController.remove);

module.exports = router;
