import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular'

import { AppService } from '../app.service'

@Component({
  selector: 'ns-providers',
  moduleId: module.id,
  templateUrl: './login.component.html',
})
export class LoginComponent {

  providers: any[] = [
    { id: 'facebook', name: 'Facebook', color: '#4267b2' },
    { id: 'twitter', name: 'Twitter', color: '#1da1f2' },
  ]

  constructor(private appService: AppService, private router: RouterExtensions,) {}

  onTap(providerId: string): void {
    console.log(`onTap: ${providerId}`)
    switch (providerId) {
      case 'facebook':
        this.appService.loginWithFacebook()
          .subscribe(
            res => this.router.navigate(['/profile'], { clearHistory: true }),
            err => alert(err),
          )
      case 'twitter':
        this.appService.loginWithTwitter()
          .subscribe(
            res => this.router.navigate(['/profile'], { clearHistory: true }),
            err => alert(err),
          )
    }
  }

}