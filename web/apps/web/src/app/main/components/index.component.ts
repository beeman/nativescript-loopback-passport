import { Component } from '@angular/core'

@Component({
  selector: 'app-index',
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand" routerLink="/" >NG Web</a>
      <div id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" *ngFor="let link of links"
             [routerLink]="link.link" routerLinkActive="active">
            {{link.label}}
          </a>
        </div>
      </div>
    </nav>
    <div class="container mt-5">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class IndexComponent {
  links = [
    // Nav Links
    { link: '/home', label: 'Home' },
    { link: '/login', label: 'Login' },
    { link: '/profile', label: 'Profile' },
  ]
}
