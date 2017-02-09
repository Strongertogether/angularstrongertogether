var mysql = require ('../config/database');
var bcrypt = require('bcrypt-nodejs');

var model_users = {};

model_users.signup = function(email, pass1, done){

  //console.log(email,pass1);

    if (mysql.connection) {
      mysql.connection.query("select * from users where email = '"+email+"'",function(err, rows){

          if (err)
            return done(err);
            if(rows.length){
              return done(null, false, 'El usuario ya existe');
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

//local login

model_users.login = function(email, pass, done){
console.log("login model");
  if (mysql.connection) {
    mysql.connection.query("select * from users where email = '"+email+"'",function(err, rows){

      if (err)
            return done(err);

            // if no user is found, return the message
            if (!rows.length){
              console.log("usuario no encontrado");
                return done(null, false, "Usuario no encontrado");
              }

                if (!bcrypt.compareSync(pass, rows[0].password)){
                    return done(null, false, "El password utilizado no es valido");
                    console.log("no login");
                      // all is well, return user
                    }else{
                      return done(null, rows[0], "Welcom again to Strongertogether");
                      console.log("welcome");
                      }
  });
};
  }







module.exports = model_users;
