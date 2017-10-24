# nativescript-loopback-passport

Project to explore how to authenticate native and web clients using a social login, and use this information
to log in to a 'local' LoopBack API.

This is useful when working with NativeScript, that handles the Facebook login using the native Facebook app on
the mobile device.

## Flow

The basic flow is as follows:

**CLIENT (NativeScript or Angular)**

- The client authenticates with facebook
- On successful authentication it returns a access token `<token>`
- This access token is sent to the API `/api/AuthProviders/facebook/login?token=<token>`

**API**

- Receives the token and gets the user profile from Facebook
- The returned data is normalized
- Check if a user with this email exists. If not, create one.
- Create an Access Token for this user
- Return the Access Token and User info (similar behaviour as /api/Users/login?include=user)
