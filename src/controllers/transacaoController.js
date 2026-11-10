const TransacaoModel = require('../models/transacaoModel');

const transacaoController = {
    async getAll (req, res){
        try {
            const transacoes = await TransacaoModel.listarTodos();
            res.json(transacoes);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async getById (req, res) {
        try{
            const transacao = await TransacaoModel.buscarPorId(req.params.id);
            if(!transacao) return res.status(404).json({msg: 'Transação não encontrada'});
            res.json(transacao);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async create (req, res){
        try {
            const result = await TransacaoModel.criar(req.body);
            res.status(201).json({ id: Number(result.insertId), ...req.body});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async update (req, res) {
        try {
            await TransacaoModel.atualizar(req.params.id);
            res.json({msg: 'Transação atualizada com sucesso'});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async delete (req, res) {
        try {
            await TransacaoModel.deletar(req.params.id);
            res.json({msg: 'Trasação deletada com sucesso'});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
};

module.exports = transacaoController;