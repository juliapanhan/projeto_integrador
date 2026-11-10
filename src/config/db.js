const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'senai2026',
    database: process.env.DB_NAME || 'projeto_integrador',
    port: process.env.PORT || 3000

});

module.exports = pool;