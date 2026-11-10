const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

router.get('/', carrinhoController.getAll);
router.get('/:id', carrinhoController.getById);
router.post('/', carrinhoController.create);
router.put('/:id', carrinhoController.update);
router.get('/:id', carrinhoController.delete);

module.exports = router;