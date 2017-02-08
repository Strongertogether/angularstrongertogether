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


/*model_users.localLogin = function(email, pass, callback){
console.log("local");
  if (mysql.connection) {
    mysql.connection.query("select * from users where email = '"+email+"'",function(err, rows){

      if (err)
            return callback(err);

            // if no user is found, return the message
            if (!rows.length)
                return callback(null, false, "Usuario no encontrado");

                if (!password.validPassword(pass, rows[0].pass))
                    return callback(null, false, "El password utilizado no es valido");

                      // all is well, return user
                      else
                      return callback(null, rows, "Bienvenido a PhotoTourist");

  });
};
  }*/







module.exports = model_users;
