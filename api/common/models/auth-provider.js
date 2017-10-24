'use strict';

// Defined the handlers to do the actual authentication
const handlers = {
  facebook: require('./lib/social-facebook'),
}

// Disabled remote methods
const disabledMethods = [
  'create',
  'createChangeStream',
  'deleteById',
  'patchOrCreate',
  'prototype.patchAttributes',
  'prototype.exists',
  'replaceById',
  'replaceOrCreate',
  'update',
  'upsert',
  'upsertWithWhere',
]

module.exports = function(AuthProvider) {

  // Make sure we have a handler for the Auth Provider
  AuthProvider.validatesInclusionOf('type', { in: Object.keys(handlers) });

  // Create a token for this userId and convert it to a plain object
  const createToken = userId => AuthProvider.app.models.AccessToken
    .create({ userId })
    .then(token => token.toObject())

  // Create an access token and merge it with the User object
  const loginUser = user => createToken(user.id)
    .then(token => Object.assign({}, token, { user }))

  // Custom findOrCreate method because the LoopBack internal one does not work as expected
  const findOrCreate = profile => AuthProvider.app.models.User
    .findOne({where: {email: profile.email}})
    .then(res => res ? res : AuthProvider.app.models.User.create(profile))

  AuthProvider.prototype.login = function(token) {
    switch (this.type) {
      case 'facebook':
        return handlers[this.type].login(token)
          .then(profile => findOrCreate(profile))
          .then(user => loginUser(user))
      default:
        return Promise.reject(`Unknown provider ${provider}`)
    }
  }

  // Enable the Login method for each of the Auth Providers
  AuthProvider.remoteMethod('prototype.login', {
    description: 'Login to the API in using this Authentication Provider',
    accepts: [ { arg: 'token', type: 'string', required: true } ],
    returns: { arg: 'result', type: 'object', root: true },
    http: { verb: 'get' },
  })

  disabledMethods.forEach(method => AuthProvider.disableRemoteMethodByName(method))
};
