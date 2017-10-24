import * as application from 'application';
const nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, () => nsFacebook.init('796785553857062'));
