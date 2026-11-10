const UsuarioModel = require('../models/usuarioModel');
const { getAll, getById } = require('./transacaoController');

const usuarioController = {
    async getAll (req, res) {
        try {
            const usuarios = await UsuarioModel.listarTodos();
            res.json(usuarios);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    },

    async getById (req, res) {
        try {
            const usuario = await UsuarioModel.buscarPorId(req.params.id);
            if(!usuario) return res.status(404).json({msg: 'Usuário não encontrado'});
            res.json(usuario);
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    },

    async create (req, res) {
        try {
            const result = await UsuarioModel.criar(req.body);
            res.status(201).json({ id: Number(result.insertId), ...req.body});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    },

    async update (req, res) {
        try{
            await UsuarioModel.atualizar(req.params.id);
            res.json({msg: 'Usuário atualizado com sucesso'});
        } catch (err) {
            res.status(500).json({ error: err.message});
        }
    },

    async delete (req, res) {
        try {
            await UsuarioModel.deletar(req.params.id);
            res.json({msg: 'Usuário deletado com sucesso'});
        } catch (err) {
            res.status(500).json({error: err.message});
        }
    }
};

module.exports = usuarioController;