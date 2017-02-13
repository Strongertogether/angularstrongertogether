
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var mysql = require ('./database');
var bcrypt = require('bcrypt-nodejs');
var model_users = require ('../users/users.model');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var OAuthStrategy = require('passport-oauth').OAuthStrategy; //encara que no es gaste, fa falta
var OAuth2Strategy = require('passport-oauth').OAuth2Strategy; //encara que no es gaste, fa falta

// expose this function to our app using module.exports
module.exports = function() {

  passport.serializeUser(function(user, done) {
      done(null, user.email);
      console.log("user " + user.email);
  });

    passport.deserializeUser( function( id, done ) {
    console.log('DESERIALIZE USER ' + id);
    mysql.connection.query('select * from users where email = ' + id, function(err, rows){

      if (err){done(err);}

            // if no user is found, return the message
            if (!rows.length){done(null, null);}
                // all is well, return user
                      else{

                        var newUserMysql = {
                          email : rows[0].email,
                          name : rows[0].name,
                          avatar : rows[0].avatar
                        };

                        done(err, newUserMysql);
                      }

    });
});

passport.use(new FacebookStrategy({
    clientID: '1679006592397779',
    clientSecret: '70f4c5af2d055e13092084b492276ab8',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['name', 'email', 'locale', 'timezone'],
    passReqToCallback: true
}, function (req, accessToken, refreshToken, profile, done) {

    model_users.countUser(profile.id, function (rows) {
        if (rows[0].userCount === 0) {

            console.log('NO EXISTE CREO NEW USER');
            var newUser = {
                name: profile._json.first_name,
                surname: profile._json.last_name,
                email: profile._json.id,
                tipo: 'client',
                password:'',
            };
            console.log("NUEVO USUARIO: " + newUser);
            model_users.insertUser(newUser, function (rows) {
                if (rows) {
                    return done(null, rows);
                }
            });
            return done(null, rows);
        } else {
            console.log('si existe y devuelvo datos');
            model_users.getUser(profile._json.id, function (error, rows) {
                if (!rows.length) {

                    return done(null, false, 'nouser');

                } else {
                    console.log(rows[0]);
                    return done(null, rows[0]);
                }
            });

        }//fin del else
    });//fin de count

}))


passport.use(new TwitterStrategy({
  consumerKey: 'FH9iEQCePaLwAvpZE6OAhKoYq',
  consumerSecret: 'KyHCvj92DYvO5myjYOFsEMC6xPKJ8NLeSwJcRC8T8qT12V29Mk',
  callbackURL: 'http://localhost:3000/auth/twitter/callback',
passReqToCallback : true
},
function(req, token, tokenSecret, profile, done) {
 model_users.countUser(profile.id, function (rows) {
        if (rows[0].userCount === 0) {

            console.log('no existe usuario');
            var newUser = {
                name: profile.username,
                email: profile.id,
                tipo: 'client',
                password:''
            };

            model_users.insertUser(newUser, function (rows) {
                if (rows) {
                    return done(null, newUser);
                }
            });//fin de consulta
            //return done(null, rows);
        } else {
            console.log('ya existe');
            model_users.getUser(profile.id, function (error, rows) {
                if (!rows.length) {

                    return done(null, false, 'nouser');

                } else {

                    return done(null, rows[0]);
                }
            });

        }//fin del else
    });
}));


    // LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'pass',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },

    function(req, email, pass, done) {

      var password = bcrypt.hashSync(pass, null, null);

      return model_users.signup(email, password, done);

  }));


  ///LOCAL LOGIN
  passport.use('local-login',new LocalStrategy({
          // by default, local strategy uses username and password, we will override with email
          usernameField : 'email',
          passwordField : 'pass',
          passReqToCallback : true // allows us to pass back the entire request to the callback
      },

      function(req, email, pass, done) { // callback with email and password from our form

          return model_users.login(email, pass, done);

      }));

};
