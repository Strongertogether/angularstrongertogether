/*var mysql = require('mysql'),
connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '123qwe',
        database: 'strongertogether'
    }
);

var specialistsModel = {};

// Obtiene todos los objetos Menus de la base de datos
specialistsModel.getSpecialists = function (req, res){

  if (connection) {

      connection.query('SELECT * FROM specialists ORDER BY id', function(error, rows) {
          if(error){
              throw error;
          }else{
              callback(null, rows);
          }
      });
  }
}

specialistsModel.getSpecialist = function(id,callback){
    if (connection) {
        var sql = 'SELECT * FROM specialists WHERE id = ' + connection.escape(id);
        connection.query(sql, function(error, row) {
            if(error){
                throw error;
            }else{
                callback(null, row);
            }
        });
    }
}

module.exports = specialistsModel;
*/

var mysql = require('../config.db');

var menusModel = {};

// Obtiene todos los objetos Menus de la base de datos
menusModel.getMenus = function (callback){
  if (mysql.connection) {
      mysql.connection.query('SELECT * FROM restaurantes ORDER BY id', function(error, rows) {
          if(error){
              throw error;
          }else{
            console.log(rows);
              callback(null, rows);
          }
      });
  }
}

menusModel.getMenu = function(id,callback){
    if (connection) {
        var sql = 'SELECT * FROM restaurantes WHERE id = ' + mysql.connection.escape(id);
        mysql.connection.query(sql, function(error, row) {
            if(error){
                throw error;
            }else{
                callback(null, row);
            }
        });
    }
}

module.exports = menusModel;
