var router = require('express').Router();
//var four0four = require('./utils/404')();
//var data = require('./data');
var data = require('./data');
var Specialists = require('./specialists/specialists.model');

//router.get('/people', getPeople);
//router.get('/person/:id', getPerson);

router.get('/specialists', Specialists.getSpecialists);
router.get('/specialist/:id', Specialists.getSpecialist);

//router.get('/*', four0four.notFoundMiddleware);
//router.post('/sendemail', sendemail);

module.exports = router;


/*function sendemail(req, res, next) {
  email.sendemail(req,res);
}*/

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function(p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}
