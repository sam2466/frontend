const mysql = require('mysql2/promise');

const myConnection =mysql.createPool({
    host : 'localhost',
    user: 'root',
    password: '12345',
    database: 'term_project',
    port: 3306,
    charset: 'utf8'
});

module.exports = myConnection;
global.myConnection=myConnection;