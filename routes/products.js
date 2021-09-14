const { Router } = require('express');
const productsController = require('../controllers/productsController');
const productsMiddleware = require('../middlewares/productsMiddleware');

const router = Router();

router.post('/', productsMiddleware.validate, productsController.register);
router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.put('/:id', productsMiddleware.validate, productsController.update);
router.delete('/:id', productsController.remove);

module.exports = router;
