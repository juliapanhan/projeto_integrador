const express = require('express');
const router = express.Router();
const notaFiscalController = require('../controllers/notaFiscalController');

router.get('/', notaFiscalController.getAll);
router.get('/:id', notaFiscalController.getById);
router.post('/', notaFiscalController.create);
router.put('/:id', notaFiscalController.update);
router.delete('/:id', notaFiscalController.delete);

module.exports = router;