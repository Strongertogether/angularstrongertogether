var mysql = require ('../config/database');
var bcrypt = require('bcrypt-nodejs');

var modelUsers = {};

modelUsers.signup = function(email, pass1, done) {

  //console.log(email,pass1);

  if (mysql.connection) {
    mysql.connection.query('select * from users where email = "' + email + '"',function(err, rows) {

            if (err) {
              return done(err);
            }
            if (rows.length) {
              return done(null, false, 'El usuario ya existe');
            }else {
              //create the user
              var newUserMysql = {};

              newUserMysql.email = email;
              newUserMysql.password = pass1;

              var insertQuery = 'INSERT INTO users (email, password) values ("' + email + '","' + pass1 + '")';
              //console.log("insertQuery"+ insertQuery);
              mysql.connection.query(insertQuery,function(err,rows) {
                newUserMysql.id = rows.insertId;
                console.log(newUserMysql);
                return done(null, newUserMysql, true);
              });
            }
          });
  }
};

//local login

modelUsers.getUser = function (id, callback) {
    if (mysql.connection) {
      mysql.connection.query("SELECT * FROM users WHERE email like '" + id + "'",
        function (error, row) {
            if (error) {
              throw error;
            } else {
              callback(null, row);
            }
          });
    }
  };

modelUsers.login = function(email, pass, done) {
    console.log('login model');
    if (mysql.connection) {
      mysql.connection.query('select * from users where email = "' + email + '"',function(err, rows) {

        if (err) {
          return done(err);
        }

        // if no user is found, return the message
        if (!rows.length) {
          console.log('usuario no encontrado');
          return done(null, false, 'Usuario no encontrado');
        }

        if (!bcrypt.compareSync(pass, rows[0].password)) {
          return done(null, false, 'El password utilizado no es valido');

          // all is well, return user
        }else {
          return done(null, rows[0], 'Welcom again to Strongertogether');
        }
      });
    }
  };

modelUsers.countUser = function (id, callback) {

    if (mysql.connection) {
      mysql.connection.query("SELECT COUNT(*) AS userCount FROM users WHERE email like '" + id + "'",
        function (error, rows) {
            if (error) {
              throw error;
            } else {
              callback(rows);
            }
          });
    }
  };

modelUsers.insertUser = function (userData, callback) {

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

module.exports = modelUsers;
