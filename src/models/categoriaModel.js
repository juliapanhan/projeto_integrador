const pool = require('../config/database');

const CategoriaModel = {
    async listarTodas() {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM categoria');
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async buscarPorId(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM categoria WHERE id = ?', [id]);
            return rows[0];
        } finally {
            if (conn) conn.release();
        }
    },

    async criar(dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'INSERT INTO categoria (nome) VALUES (?)',
                [dados.nome]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    },

    async atualizar(id, dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'UPDATE categoria SET nome = ? WHERE id = ?',
                [dados.nome, id]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    },

    async deletar(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute('DELETE FROM categoria WHERE id = ?', [id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = CategoriaModel;