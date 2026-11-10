const pool = require('../config/database');

const CadastroModel = {
    async buscarPorId(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute('SELECT * FROM cadastro WHERE id = ?', [id]);
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
                'INSERT INTO cadastro (nome, email, senha, endereco, telefone) VALUES (?, ?, ?, ?, ?)',
                [dados.nome, dados.email, dados.senha, dados.endereco, dados.telefone]
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
                'UPDATE cadastro SET nome = ?, email = ?, endereco = ?, telefone = ? WHERE id = ?',
                [dados.nome, dados.email, dados.endereco, dados.telefone, id]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = CadastroModel;