
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var mysql = require ('./database');
var bcrypt = require('bcrypt-nodejs');
var model_users = require ('../users/users.model');


// expose this function to our app using module.exports
module.exports = function() {

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
