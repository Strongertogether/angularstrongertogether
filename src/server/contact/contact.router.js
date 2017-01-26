var email = require('./contact.controller');

exports.sendmail= function(req,res) {
    email.sendmail(req,res);
};
