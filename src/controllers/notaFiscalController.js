const NotaFiscalModel = require('../models/notaFiscalModel');

const notaFiscalController = {
    async getAll (req, res) {
        try {
            const notasFiscais = await NotaFiscalModel.listarTodos();
            res.json(notasFiscais);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async getById (req, res) {
        try {
            const notaFiscal = await NotaFiscalModel.buscarPorId(req.params.id);
            if(!notaFiscal) return res.status(404).json({msg: 'Nota Fiscal não encontrada'});
            res.json(notaFiscal);
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async create (req, res) {
        try {
            const result = await NotaFiscalModel.criar(req.body);
            res.status(201).json({ id: Number(result.insertId), ...req.body});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    },

    async updare (req, res) {
        try {
            await NotaFiscalModel.atualizar(req.params.id);
            res.json({msg: 'Nota fiscal atualizada com sucesso'});
        } catch (err) {
            res.status(500);json({ error: err.message});
        }
    },

    async delete (req, res) {
        try {
            await NotaFiscalModel.deletar(req.params.id);
            res.json({msg: 'Nota fiscal deletada com sucesso'});
        } catch (err) {
            res.status(500).json({error: err.massege});
        }
    }
};

module.exports = notaFiscalController;