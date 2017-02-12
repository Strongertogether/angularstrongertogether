var ControllerSpecialists = require ('./specialists.controller');

module.exports = function(app) {
  app.get('/api/specialists', ControllerSpecialists.getSpecialists);

  app.get('/api/specialist/:id', ControllerSpecialists.getSpecialist);
};
