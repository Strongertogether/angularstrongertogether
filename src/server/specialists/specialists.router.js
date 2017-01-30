var ControllerSpecialists = require ('./specialists.controller');

<<<<<<< HEAD
module.exports = function(app) {
  app.post('/api/menus', ControllerMenus.getMenus);

  app.post('/api/menu/:menu_id', ControllerMenus.getMenus);
=======
module.exports = function(app) {  
  app.get('/api/specialists', ControllerSpecialists.getSpecialists);

  app.get('/api/specialist/:id', ControllerSpecialists.getSpecialist);
>>>>>>> 4943c692bc05cc004f160026cb9eb992e3b00d8b
};
