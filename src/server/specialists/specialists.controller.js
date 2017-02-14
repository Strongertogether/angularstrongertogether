var Specialists = require('./specialists.model.js');

exports.getSpecialists = function(req, res) {
  console.log('ENTRA EN GET SPECIALISTS');
  Specialists.getSpecialists(
function(err, menus) {
    if (err) {
      res.send(err);
    }
    console.log(menus);
    res.json(menus); // devuelve todos los menus en JSON
  }
);
};

exports.getSpecialist = function(req, res) {
  Specialists.getSpecialist(req.param.menuId,
function(err, menu) {
    if (err) {
      res.send(err);
    }
    console.log(menu);
    res.json(menu); // devuelve el menu en JSON
  }
);
};
