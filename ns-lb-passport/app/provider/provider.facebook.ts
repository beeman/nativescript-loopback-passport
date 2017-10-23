import * as http from 'tns-core-modules/http';

import * as Facebook from 'nativescript-facebook';

const fbBaseUrl = 'https://graph.facebook.com'

const fbUrl = (path, token, params = '') => `${fbBaseUrl}/${path}?access_token=${token}${params}`

const fbNormalizeProfile = profile => ({
  id: profile.id,
  email: profile.email,
  firstName: profile.first_name,
  lastName: profile.last_name,
  avatar: profile.picture.data.is_silhouette ? null : profile.picture.data.url,
})

const fbUserProfile = token => {
  return http.getJSON(fbUrl('me', token, '&fields=id,first_name,last_name,picture,email'))
    .then(profile => fbNormalizeProfile(profile))
    .catch(err => {
      console.log('fbGetUserInfo error')
      console.dir(err)
      return err
    })
}

export const login = () => new Promise((resolve, reject) => {
  Facebook.login((error, res) => {
    if (error) {
      return reject(`Error during login: ${error.message}`)
    }
    return fbUserProfile(res.token)
      .then(info => resolve(info))
  });

})


