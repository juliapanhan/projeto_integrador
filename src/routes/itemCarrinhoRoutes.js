const express = require('express');
const router = express.Router();
const itemCarrinhoController = require('../controllers/itemCarrinhoController');

router.get('/', itemCarrinhoController.getAll);
router.get('/:id', itemCarrinhoController.getById);
router.post('/', itemCarrinhoController.create);
router.put('/:id', itemCarrinhoController.update);
router.delete('/:id', itemCarrinhoController.delete);

module.exports = router;