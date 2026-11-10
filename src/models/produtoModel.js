const pool = require('../config/db.js');

const ProdutoModel = {
    async listarTodos() {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM produto');
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async buscarPorId(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM produto WHERE id = ?', [id]);
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
                'INSERT INTO produto (nome, preco, estoque, categoria_id) VALUES (?, ?, ?, ?)',
                [dados.nome, dados.preco, dados.estoque, dados.categoria_id]
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
                'UPDATE produto SET nome = ?, preco = ?, estoque = ?, categoria_id = ? WHERE id = ?',
                [dados.nome, dados.preco, dados.estoque, dados.categoria_id, id]
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
            const [result] = await conn.execute('DELETE FROM produto WHERE id = ?', [id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = ProdutoModel;