import * as Facebook from 'nativescript-facebook';

export const login = () => new Promise((resolve, reject) => {
  Facebook.login((error, res) => {
    if (error) {
      return reject(`Error during login: ${error.message}`)
    }
    return resolve(res.token)
  });

})


