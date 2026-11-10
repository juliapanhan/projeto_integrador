const pool = require('../config/db.js');

const TransacaoModel = {
    async listarVendas() {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM venda');
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async registrarVenda(dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'INSERT INTO venda (cliente_id, total) VALUES (?, ?)',
                [dados.cliente_id, dados.total]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    },

    async registrarCompra(dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'INSERT INTO compra (cliente_id, total) VALUES (?, ?)',
                [dados.cliente_id, dados.total]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = TransacaoModel;