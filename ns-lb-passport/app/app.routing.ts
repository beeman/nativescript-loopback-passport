import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { ProvidersComponent } from './provider/providers.component';
import { ProviderDetailComponent } from './provider/provider-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/providers', pathMatch: 'full' },
  { path: 'providers', component: ProvidersComponent },
  { path: 'provider/:id', component: ProviderDetailComponent },
];

@NgModule({
  imports: [ NativeScriptRouterModule.forRoot(routes) ],
  exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule {
}