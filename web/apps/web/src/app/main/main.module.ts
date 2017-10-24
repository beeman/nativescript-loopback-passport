import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './components/home.component'
import { IndexComponent } from './components/index.component'
import { LoginComponent } from './components/login.component'
import { ProfileComponent } from './components/profile.component'
import { ProfileResolver } from './profile.resolver'

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent, resolve: { profile: ProfileResolver } },
    ],
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent, IndexComponent, LoginComponent, ProfileComponent],
  providers: [ProfileResolver],
})
export class MainModule {}
