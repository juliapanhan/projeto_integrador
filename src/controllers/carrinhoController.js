const CarrinhoModel = require('../models/carrinhoModel');

const carrinhoController = {
    async getAll (req, res) {
        try {
            const carrinhos = await CarrinhoModel.listarTodos();
            res.json(carrinhos);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async getById (req,res) {
        try {
            const carrinho = await CarrinhoModel.buscarPorId(req.params.id);
            if(!carrinho) return res.status(404).json({msg: 'Carrinho não encontrado'});
            res.json(carrinho);
        }catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async create (req, res) {
        try {
            const result = await CarrinhoModel.criar(req.body);
            res.status(201).json({ id: Number(result.insertId), ...req.body});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async update (req, res) {
        try {
            await CarrinhoModel.atualizar(req.params.id);
            res.json({msg: 'Carrinho atualizado com sucesso'});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async delete (req, res) {
        try {
            await CarrinhoModel.deletar(req.params.id);
            res.json({msg: 'Carrinho deletado com sucesso'});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
};

module.exports = carrinhoController;