var mysql = require('mysql'),

connection = mysql.createConnection({
        host: '127.0.0.1',
<<<<<<< HEAD
        user: 'root',
        password: '123qwe',
=======
        user: 'strongertogether',
        password: '',
>>>>>>> 813065b351880cac61a4d6ed68b76e0e135592e4
        database: 'strongertogether'
    }
);

module.exports.connection = connection;
