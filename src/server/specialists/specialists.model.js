var mysql = require ('../config/database');

var specialistsModel = {};

// Obtiene todos los objetos Menus de la base de datos
specialistsModel.getSpecialists = function (callback){

  if (mysql.connection) {
      mysql.connection.query('SELECT * FROM specialists ORDER BY id', function(error, rows) {
          if(error){
              throw error;
          }else{
            console.log(rows);
              callback(null, rows);
          }
      });
  }
};

specialistsModel.getSpecialist = function(id,callback){
    if (mysql.connection) {
        var sql = 'SELECT * FROM specialists WHERE id = ' + mysql.connection.escape(id);
        mysql.connection.query(sql, function(error, row) {
            if(error){
                throw error;
            }else{
                callback(null, row);
            }
        });
    }
  };

module.exports = specialistsModel;
