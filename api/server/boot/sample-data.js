'use strict';

module.exports = function(app) {

  const log = provider => console.log(`[AuthProvider] Loading provider: ${provider.name}`)

  const authProviders = [
    {
      id: 'facebook',
      name: 'Facebook',
      type: 'facebook',
      config: {
        appId: '796785553857062',
      },
    },
  ]

  return app.models.AuthProvider
    .create(authProviders)
    .then(providers => providers.forEach(log))

};
