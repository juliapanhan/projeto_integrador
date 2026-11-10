const pool = require('../config/db.js');

const CarrinhoModel = {
    async listarTodos() {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM carrinho_de_compra');
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async buscarPorCliente(clienteId) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute(
                'SELECT * FROM carrinho_de_compra WHERE cliente_id = ? ORDER BY data_criacao DESC',
                [clienteId]
            );
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async criar(clienteId) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'INSERT INTO carrinho_de_compra (cliente_id) VALUES (?)',
                [clienteId]
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
            const [result] = await conn.execute('DELETE FROM carrinho_de_compra WHERE id = ?', [id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = CarrinhoModel;