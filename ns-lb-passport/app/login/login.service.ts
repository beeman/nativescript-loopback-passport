import { Injectable } from '@angular/core';

import * as http from 'tns-core-modules/http';

import { login as loginFacebook } from './lib/auth-provider.facebook'


import { AuthProvider } from './auth-provider';

@Injectable()
export class LoginService {

  private user = {}

  private authProviders = new Array<AuthProvider>(
    { id: 'facebook', name: 'Facebook', color: '#4267b2' },
  );

  getAuthProviders(): AuthProvider[] {
    return this.authProviders;
  }

  getProfile(provider, token) {
    const baseUrl = 'http://localhost:3000/api'
    const url = `${baseUrl}/AuthProviders/${provider}/login?token=${token}`
    return http.getJSON(url)
  }

  login(providerId: string): void {
    switch (providerId) {
      case 'facebook':
        loginFacebook()
          .then((token: any) => this.getProfile(providerId, token))
          .then((res: any) => {
            console.log('res')
            console.dir(res)
            this.user = res
          })
          .catch(err => {
            console.dir(err)
            alert(err)
          })
        break;
      default:
        console.log(`Unknown provider ${providerId}`)
    }

  }
}
