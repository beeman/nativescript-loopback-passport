import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { ProfileResolver } from './profile.resolver'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, resolve: { profile: ProfileResolver } },
];

@NgModule({
  imports: [ NativeScriptRouterModule.forRoot(routes) ],
  exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule {
}