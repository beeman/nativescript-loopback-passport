import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/observable/of'

import { login as loginFacebook } from './lib/auth-provider.facebook'
import { login as loginTwitter} from './lib/auth-provider.twitter'

const baseUrl = 'http://localhost:3000/api'

@Injectable()
export class AppService {

  private accessToken: any = {}

  constructor(private http: HttpClient) {}

  private api(path) {
    return this.http.get(baseUrl + path)
  }

  fbLogin(): Observable<any> {
    return Observable.fromPromise(loginFacebook())
  }


  apiLogin(provider, token): Observable<any> {
    const url = `/AuthProviders/${provider}/login?token=${token}`
    return this.api(url).map((res: any) => (this.accessToken = res))
  }

  getProfile() {
    const url = `/users/me?access_token=${this.accessToken.id}`
    return this.api(url)
  }

  public loginWithFacebook(): Observable<any> {
    return this.fbLogin().flatMap((token: any) => this.apiLogin('facebook', token))
  }

  public loginWithTwitter(): Observable<any> {
    console.log('loginWithTwitter invoked')
    return Observable.of({ dummy: 'object' })
  }
}
