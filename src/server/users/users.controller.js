var passport = require('passport');

module.exports.signup = signup;
module.exports.login = login;

function signup(req, res, next) {

passport.authenticate('local-signup', function(err, user, info) {

if (err)
  res.send(err)
  console.log("err " +err);
  res.json(info);

  })(req, res, next);
};

function login(req, res, next) {
passport.authenticate('local-login', function(err, user, info) {
var rows = {rows: user,
inf: info};

if (err)
  res.send(err)
  console.log("err " +err);
  res.json(rows);

  })(req, res, next);
};
