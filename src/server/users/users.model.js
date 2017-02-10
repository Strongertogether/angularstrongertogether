var mysql = require ('../config/database');
//var password = require ('../utils/password');

var model_users = {};

model_users.signup = function(email, pass1, done){

  //console.log(email,pass1);

    if (mysql.connection) {
      mysql.connection.query("select * from users where email = '"+email+"'",function(err, rows){

          if (err)
            return done(err);
            if(rows.length){

              return done(null, false, false);
            }else {
              //create the user
              var newUserMysql = new Object();

              newUserMysql.email = email;
              newUserMysql.password = pass1;

              var insertQuery = "INSERT INTO users (email, password) values ('"+ email +"','"+pass1+"')";
              //console.log("insertQuery"+ insertQuery);
              mysql.connection.query(insertQuery,function(err,rows){
                newUserMysql.id = rows.insertId;
                console.log(newUserMysql);
                return done(null, newUserMysql, true);
              });
            }
          });
    }
}


model_users.getUser = function (id, callback) {
    if (mysql.connection) {
        mysql.connection.query('SELECT * FROM users WHERE email like "' + id + '"',
        function (error, row) {
            if (error) {
                throw error;
            } else {
                callback(null, row);
            }
        });
    }
};

model_users.countUser = function (id, callback) {

    if (mysql.connection) {
        mysql.connection.query('SELECT COUNT(*) AS userCount FROM users WHERE email like "' + id + '"',
        function (error, rows) {
            if (error) {
                throw error;
            } else {
                callback(rows);
            }
        });
    }
};

model_users.insertUser = function (userData, callback) {

    if (mysql.connection) {
        mysql.connection.query('INSERT INTO users SET ?', userData, function (err, result) {
            if (err) {
                throw err;
            } else {
                callback(result);
            }
        });
    }
};

module.exports = model_users;
