
var LocalStrategy    = require('passport-local').Strategy;
var passport = require('passport');
var mysql = require ('./database');
var password = require ('../utils/password');
var usersModel = require ('../users/users.model');


// expose this function to our app using module.exports
module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    mysql.connection.query("select * from users where email = " + id, function(err, rows){
      done(err, rows[0]);
    });
        });

    // LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'pass1',
        passwordField : 'pass2',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, pass1, pass2, done) {

      var pass = password.generateHash(pass1);
      var repeat_pass = password.generateHash(pass2);

      return model_users.signup(email, pass,repeat_pass, done);

  }));
    // LOCAL LOGIN

    passport.use(
        'local-login',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'username',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) { // callback with email and password from our form
            connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
                if (err)
                    return done(err);
                if (!rows.length) {
                    return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the user is found but the password is wrong
                if (!bcrypt.compareSync(password, rows[0].password))
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

                // all is well, return successful user
                return done(null, rows[0]);
            });
        })
    );
};
