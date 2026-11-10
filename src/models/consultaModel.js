const pool = require('../config/database');

const ConsultaModel = {
    async listarPorCliente(clienteId) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute(
                'SELECT * FROM consulta WHERE cliente_id = ? ORDER BY data_consulta DESC',
                [clienteId]
            );
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async criar(dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'INSERT INTO consulta (cliente_id, descricao) VALUES (?, ?)',
                [dados.cliente_id, dados.descricao]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = ConsultaModel;