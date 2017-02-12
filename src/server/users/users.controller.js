var passport = require('passport');

module.exports.signup = signup;

function signup(req, res, next) {
console.log("controller signup server");
passport.authenticate('local-signup', function(err, user, info) {
if (err)
  res.send(err);
  console.log("err " +err);
  console.log("info " +info);
  res.json(info);

  })(req, res, next);
};
