var usersController = require('./users.controller.js');

module.exports = function(app,passport){
  app.post('/api/signup', usersController.signup);
  //app.post('/api/login',  ControllerUsers.login);
};
