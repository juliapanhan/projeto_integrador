const CategoriaModel = require('../models/categoriaModel');

const categoriaController = {
    async getAll (req, res) {
        try {
            const categorias = await CategoriaModel.listarTodos();
            res.json(categorias);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async getById (req,res) {
        try {
            const categoria = await CategoriaModel.buscarPorId(req.params.id);
            if(!categoria) return res.status(404).json({msg: 'Categoria não encontrada'});
            res.json(categoria);
        }catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async create (req, res) {
        try {
            const result = await CategoriaModel.criar(req.body);
            res.status(201).json({ id: Number(result.insertId), ...req.body});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async update (req, res) {
        try {
            await CategoriaModel.atualizar(req.params.id);
            res.json({msg: 'Categoria atualizada com sucesso'});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async delete (req, res) {
        try {
            await CategoriaModel.deletar(req.params.id);
            res.json({msg: 'Categoria deletada com sucesso'});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
};

module.exports = categoriaController;