var passport = require('passport');
//Local
module.exports.signup = signup;
module.exports.login = login;

//Others
module.exports.authSuccess = authSuccess;
module.exports.authFailure = authFailure;
module.exports.logout = logout;

//Profile
module.exports.loggedin = loggedin;

function signup(req, res, next) {
  console.log('controller signup server');
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
}

function login(req, res, next) {
  console.log('controller login server');
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
}

function authSuccess(req, res) {
  res.json(req.user);
}

function authFailure(req, res) {
  console.log('fail');
  res.render('after-auth', { state: 'failure', user: null });
}

function logout(req, res) {
  req.logOut();
  res.redirect('/');
}

function loggedin(req, res) {
  console.log('LOGGEDIN ' + JSON.stringify(req.user));
  console.log('session ' + JSON.stringify(req.session));
  console.log(req.isAuthenticated());

  res.send(req.isAuthenticated() ? req.user : '0');

}
