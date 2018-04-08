'use strict';

module.exports = function(app) {
  var logout = require('../controllers/logoutController.js');

  // logout Route
  app.route('/logout')
    .delete(logout.delete_a_session);
};
