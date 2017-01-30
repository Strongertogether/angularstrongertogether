//var mysql = require('../config.db');

var mysql = require('mysql'),
connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '123qwe',
        database: 'strongertogether'
    }
);

var hospitalsModel= {};

hospitalsModel.getHospitals = function (callback){
  if (connection) {
        connection.query('SELECT * FROM hospitals ORDER BY id', function(error, rows) {
            if(error){
                throw error;
            }else{
                callback(null, rows);
            }
        });
    }
};

// techniciansModel.getTechnician = function(id,callback){
//     if (connection) {
//         var sql = 'SELECT * FROM users WHERE id = ' + connection.escape(id);
//         connection.query(sql, function(error, row) {
//             if(error){
//                 throw error;
//             }else{
//                 callback(null, row);
//             }
//         });
//     }
// };
// console.log(techniciansModel);
module.exports = hospitalsModel;
