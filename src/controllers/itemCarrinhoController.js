const ItemCarrinhoModel = require('../models/itemCarrinhoModel');

const itemCarrinhoController = {
    async getAll (req, res) {
        try {
            const itemCarrinhos = await ItemCarrinhoModel.listarTodos();
            res.json(itemCarrinhos);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async getById (req,res) {
        try {
            const itemCarrinho = await ItemCarrinhoModel.buscarPorId(req.params.id);
            if(!itemCarrinho) return res.status(404).json({msg: 'Item de carrinho não encontrado'});
            res.json(itemCarrinho);
        }catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async create (req, res) {
        try {
            const result = await ItemCarrinhoModel.criar(req.body);
            res.status(201).json({ id: Number(result.insertId), ...req.body});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async update (req, res) {
        try {
            await ItemCarrinhoModel.atualizar(req.params.id);
            res.json({msg: 'Item de carrinho atualizado com sucesso'});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async delete (req, res) {
        try {
            await ItemCarrinhoModel.deletar(req.params.id);
            res.json({msg: 'Item carrinho deletado com sucesso'});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
};

module.exports = itemCarrinhoController;