//var router = require('express').Router();

var email = require('./contact.controller');

/*router.post('/api/sendmail', function(req,res){
  email.sendemail(req,res);
});*/

exports.sendmail= function(req,res) {
    email.sendmail(req,res);
};

//module.exports = router;
