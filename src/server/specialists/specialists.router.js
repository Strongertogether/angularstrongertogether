var ControllerMenus = require ('./menus.controller');

module.exports = function(app) {
  app.post('/api/menus', ControllerMenus.getMenus);

  app.post('/api/menu/:menu_id', ControllerMenus.getMenus);
};
