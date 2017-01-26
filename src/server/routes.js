/*var router = require('express').Router();

var email = require('./contact/contact.controller');

router.post('/sendemail', function(req,res){
  email.sendemail(req,res);
});

module.exports = router;*/

var contact = require('./contact/contact.router');

module.exports = function(app) {
    app.post('/api/sendmail',contact.sendmail);
    }
