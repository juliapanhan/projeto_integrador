const ProdutoModel = require('../models/produtoModel');

const produtoController = {
    async getAll (req, res) {
        try {
            const produtos = await ProdutoModel.listarTodos();
            res.json(produtos);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async getById (req, res){
        try {
            const produto = await ProdutoModel.buscarPorId(req.params.id);
            if (!produto) return res.status(404).json({msg: 'Produto não encontrado'});
            res.json(produto);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async create (req, res) {
        try {
            const result = await ProdutoModel.criar(req.body);
            res.status(201).json({ id: Number(result.insertId), ...req.body});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async update (req, res) {
        try{
            await ProdutoModel.atualizar(req.params.id, req.body);
            res.json({ msg: 'Produto atualizado com sucesso'});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async delete (req, res) {
        try {
            await ProdutoModel.deletar(req.params.id);
            res.json({msg: 'Produto deletado com sucesso'});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    }
};

module.exports = produtoController;