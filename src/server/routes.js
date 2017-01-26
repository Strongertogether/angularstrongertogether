var router = require('express').Router();

var email = require('./contact/contact.controller');

router.post('/sendemail', function(req,res){
  email.sendemail(req,res);
});

module.exports = router;
