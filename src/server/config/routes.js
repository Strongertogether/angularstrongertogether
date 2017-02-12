'use strict';

module.exports.init = init;

function init(app) {
  require('../contact/contact.router.js')(app);
  require('../specialists/specialists.router.js')(app);
  require('../hospitals/hospitals.router.js')(app);
  require('../users/users.router.js')(app);

}
