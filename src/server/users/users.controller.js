var passport = require('passport');

module.exports.signup = signup;
module.exports.login = login;

function signup(req, res, next) {
console.log("controller signup server");
passport.authenticate('local-signup', function(err, user, info) {
  console.log(err,user,info);
  if (err) {
      return res.send('err');
  }
  if (!user) {
      return res.send('signuperror');
  }
      return res.send(true);
  })(req, res, next);
};

function login(req, res, next) {
console.log("controller login server");
passport.authenticate('local-login', function(err, user, info) {
  console.log(err,user,info);
    if (err) {
        return res.send('err');
    }
    if (!user) {
        return res.send('loginerror');
    }
        return res.send(user);
  })(req, res, next);
};
