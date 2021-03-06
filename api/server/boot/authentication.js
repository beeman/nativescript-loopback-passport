'use strict';
const loopback = require('loopback');

module.exports = function enableAuthentication(server) {
  // enable authentication
  server.enableAuth();

  server.middleware('auth', loopback.token({
    currentUserLiteral: 'me'
  }));
};
