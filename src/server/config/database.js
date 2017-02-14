var mysql = require('mysql'),

connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '123qwe',
        database: 'strongertogether'
    }
);

module.exports.connection = connection;
