//var router = require('express').Router();

var email = require('./contact.controller');

/*router.post('/api/sendmail', function(req,res){
  email.sendemail(req,res);
});*/

module.exports = function(app) {
    app.post('/api/sendmail', email.sendmail);
};

//module.exports = router;
