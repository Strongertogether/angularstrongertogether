var usersController = require('./users.controller.js');
var passport = require('passport');

module.exports = function(app){
  //local
  app.post('/api/signup', usersController.signup);
  app.post('/api/login', usersController.login);

  //facebook
  app.get('/auth/facebook', passport.authenticate('facebook'));

  	 app.get('/auth/facebook/callback', passport.authenticate('facebook',
  	 { successRedirect: '/facebook', failureRedirect: '/' }));

//twitter
app.get('/auth/twitter', passport.authenticate('twitter'));

	 app.get('/auth/twitter/callback',passport.authenticate('twitter',
	 { failureRedirect: '/' }),
  function(req, res) {
    console.log('TWITTER login ' + JSON.stringify(req.user));
    res.redirect('/');
  });


  //profile
  app.get('/api/loggedin', usersController.loggedin);

  //others
  app.get('/auth/success', usersController.authSuccess);
  app.get('/auth/failure', usersController.authFailure);
  app.get('/logout', usersController.logout);
};
