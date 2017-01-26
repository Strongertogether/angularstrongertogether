var contact = require('./contact/contact.router');

module.exports = function(app) {
    app.post('/api/sendmail',contact.sendmail);
    }
