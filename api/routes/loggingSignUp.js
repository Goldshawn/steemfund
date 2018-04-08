'use strict';

module.exports = function(app) {
  var loginSign = require('../controllers/loginController.js');

  // Login Routes
  app.route('/login')
    .post(loginSign.create_a_session);

};
