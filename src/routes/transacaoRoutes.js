const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');

router.get('/', transacaoController.getAll);
router.get('/:id', transacaoController.getById);
router.post('/', transacaoController.create);
router.put('/:id', transacaoController.update);
router.delete('/:id', transacaoController.delete);

module.exports = router;