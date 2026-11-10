const pool = require('../config/db.js');

const NotaFiscalModel = {
    async listarTodas() {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM nota_fiscal');
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async buscarPorId(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM nota_fiscal WHERE id = ?', [id]);
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
                'INSERT INTO nota_fiscal (cliente_id, total) VALUES (?, ?)',
                [dados.cliente_id, dados.total]
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
            const [result] = await conn.execute('DELETE FROM nota_fiscal WHERE id = ?', [id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = NotaFiscalModel;