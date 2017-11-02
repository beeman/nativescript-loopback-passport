import { Component } from '@angular/core'
import { AppService } from '../../app.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  template: `
    <h2>Login</h2>
    <button class="btn btn-primary" [style.backgroundColor]="'#4267b2'" (click)="login('facebook')">
      Sign in with Facebook
    </button>
    <button class="btn btn-primary" [style.backgroundColor]="'#1da1f2'" (click)="login('twitter')">
      Sign in with Twitter
    </button>
  `,
})
export class LoginComponent {
  constructor(private appService: AppService, private router: Router) {}

  login(provider) {
    switch (provider) {
      case 'facebook':
        return this.appService.loginWithFacebook()
          .subscribe(() => this.router.navigate(['/profile']))
      case 'twitter':
        return this.appService.loginWithTwitter()
          .subscribe(() => this.router.navigate(['/profile']))
      default:
        console.log(`Unknown provider ${provider}`)
    }
  }
}
