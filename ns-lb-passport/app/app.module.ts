import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';

import * as application from 'application';
const nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, () => nsFacebook.init('796785553857062'));

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  providers: [
    LoginService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})

export class AppModule {}
