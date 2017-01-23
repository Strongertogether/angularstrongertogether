var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var app = express();

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sendmail route
app.post('/sendmail', function(req, res){
    var options = {
        auth: {
            //api_key: 'YOUR_SENDGRID_API_KEY'
            api_key: sg
        }
    }
    var mailer = nodemailer.createTransport(sgTransport(options));
    mailer.sendMail(req.body, function(error, info){
        if(error){
            res.status('401').json({err: info});
        }else{
            res.status('200').json({success: true});
        }
    });
});

// Start server
app.listen(process.env.PORT);
console.log('Express server started on port %s', process.env.PORT);
