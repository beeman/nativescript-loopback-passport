import { Component } from '@angular/core'
import { AppService } from '../../app.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <button class="btn btn-primary" [style.backgroundColor]="'#4267b2'" (click)="login()">
      Sign in with Facebook
    </button>
  `,
})
export class LoginComponent {
  constructor(private appService: AppService, private router: Router) {}

  login() {
    this.appService.loginWithFacebook().subscribe(() => this.router.navigate(['/profile']))
  }
}
