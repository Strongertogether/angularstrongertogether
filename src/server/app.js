/*jshint node:true*/
'use strict';

require('dotenv').load();
var express = require('express');
var session  = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors'); //cal per a signin fb
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var passport = require('passport');
var port = process.env.PORT || 8001;
var four0four = require('./utils/404')();
var cookieParser = require('cookie-parser');

var environment = process.env.NODE_ENV;
app.use(cookieParser());

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());


// required for passport
require('./config/passport.js')(passport);
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: 'strongertogether',
	cookie: { secure: false }
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(cors());                 //cal per a signin fb

//require('./routes.js')(app);

require('./contact/contact.router.js')(app);
require('./specialists/specialists.router.js')(app);
require('./hospitals/hospitals.router.js')(app);
require('./users/users.router.js')(app);


//////////// SIGNIN FB //////////////////

app.get('/auth/facebook', passport.authenticate('facebook'));

	 app.get('/auth/facebook/callback', passport.authenticate('facebook',
	 { successRedirect: '/facebook', failureRedirect: '/' }));

	 app.get('/auth/success', function(req, res) {
         res.json(req.user);
     });

     app.get('/auth/failure', function(req, res) {
         console.log('fail');
         res.render('after-auth', { state: 'failure', user: null });
     });

		 app.get('/logout', function(req, res) {
		  req.logOut();
		  res.redirect('/');
		  //res.send(200);
		});
/////////////// END SIGNIN FB ///////////////

//////////////SIGNIN TWITTER/////////////////

app.get('/auth/twitter', passport.authenticate('twitter'));

	 app.get('/auth/twitter/callback',passport.authenticate('twitter',
	 { failureRedirect: '/login' }),
  function(req, res) {
    console.log('TWITTER login ' + JSON.stringify(req.user));
    res.redirect('/');
  });

		 app.get('/logout', function(req, res) {
		  req.logOut();
		  res.redirect('/');
		});
/////////////// END SIGNIN TWITTER//////////

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

switch (environment) {
  case 'build':
    console.log('** BUILD **');
    app.use(express.static('./build/'));
    // Any invalid calls for templateUrls are under app/* and should return 404
    app.use('/app/*', function(req, res, next) {
      four0four.send404(req, res);
    });
    // Any deep link calls should return index.html
    app.use('/*', express.static('./build/index.html'));
    break;
  default:
    console.log('** DEV **');
    app.use(express.static('./src/client/'));
    app.use(express.static('./'));
    app.use(express.static('./tmp'));
    // Any invalid calls for templateUrls are under app/* and should return 404
    app.use('/app/*', function(req, res, next) {
      four0four.send404(req, res);
    });
    // Any deep link calls should return index.html
    app.use('/*', express.static('./src/client/index.html'));
    break;
}

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});
