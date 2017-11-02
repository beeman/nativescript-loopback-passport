import { TNSTwitter } from 'nativescript-twitter'

export const login = () => new Promise((resolve, reject) => {
  return resolve(TNSTwitter.getNativeToken())

  // Facebook.login((error, res) => {
  //   if (error) {
  //     return reject(`Error during login: ${error.message}`)
  //   }
  //   return resolve(res.token)
  // });

})


