const pool = require('../config/db.js');

const UsuarioModel = {
    async listarTodos() {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT id, nome, email FROM cliente');
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async buscarPorId(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT id, nome, email FROM cliente WHERE id = ?', [id]);
            return rows[0];
        } finally{
            if(conn) conn.release();
        }
    },

    async criar(dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute('INSERT INTO cliente (nome, email, senha) VALUES (?, ?, ?)', [dados.nome, dados.email,dados.senha]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    },

    async atualizar(id, dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute('UPDATE cliente SET nome = ?, email = ? WHERE id = ?', [dados.nome, dados.email, id]);
            return result;
        } finally {
            if (conn) conn.relase();
        }
    },

    async deletar(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute('DELETE FROM cliente WHERE id = ?', [id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = UsuarioModel;