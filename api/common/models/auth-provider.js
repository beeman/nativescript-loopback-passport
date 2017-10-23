'use strict';

const fbUserProfile = require('./lib/social-facebook')

module.exports = function(AuthProvider) {

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
        return fbUserProfile(token)
          .then(profile => findOrCreate(profile))
          .then(user => loginUser(user))
      default:
        return Promise.reject(`Unknown provider ${provider}`)
    }
  }

  // Enable the Login method for each of the Auth Providers
  AuthProvider.remoteMethod('prototype.login', {
    accepts: [ { arg: 'token', type: 'string', required: true } ],
    returns: { arg: 'result', type: 'object', root: true },
    http: { verb: 'get' },
  })

};
