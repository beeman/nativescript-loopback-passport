import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpModule } from "nativescript-angular/http";

import './fb'

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { AppService } from './app.service'
import { ProfileResolver } from './profile.resolver'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
  ],
  providers: [
    AppService,
    ProfileResolver,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ],
})

export class AppModule {}
