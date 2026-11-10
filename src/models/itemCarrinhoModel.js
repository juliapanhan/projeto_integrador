const pool = require('../config/db.js');

const ItemCarrinhoModel = {
    async listarPorCarrinho(carrinhoId) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [rows] = await conn.execute(
                'SELECT * FROM item_carrinho WHERE carrinho_id = ?',
                [carrinhoId]
            );
            return rows;
        } finally {
            if (conn) conn.release();
        }
    },

    async adicionarItem(dados) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'INSERT INTO item_carrinho (carrinho_id, produto_id, quantidade, preco_unitario) VALUES (?, ?, ?, ?)',
                [dados.carrinho_id, dados.produto_id, dados.quantidade, dados.preco_unitario]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    },

    async atualizarQuantidade(id, quantidade) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute(
                'UPDATE item_carrinho SET quantidade = ? WHERE id = ?',
                [quantidade, id]
            );
            return result;
        } finally {
            if (conn) conn.release();
        }
    },

    async removerItem(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const [result] = await conn.execute('DELETE FROM item_carrinho WHERE id = ?', [id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
};

module.exports = ItemCarrinhoModel;