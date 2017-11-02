import * as app from 'application';
if (app.android) {
  const TNSTwitter = require("nativescript-twitter").TNSTwitter;
  TNSTwitter.init("nMOzsRotT4uil8j2Y1hRmFzG6", "DPhkK4lZiwC4hcByiczxswBAorwoUgJrCjpxwBIo3JX8BXNcKz");
} else if (app.ios) {
  app.ios.delegate = require('./custom-app-delegate').CustomAppDelegate;
}

import { registerElement } from "nativescript-angular/element-registry";
registerElement("TNSTwitterButton", () => require("nativescript-twitter").TNSTwitterButton);
