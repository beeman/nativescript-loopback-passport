import { Injectable } from '@angular/core'
import { FacebookService, InitParams } from 'ngx-facebook'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/empty'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap'

const baseUrl = 'http://localhost:3000/api'
const initParams: InitParams = {
  appId: '796785553857062',
  xfbml: true,
  version: 'v2.8',
}

@Injectable()
export class AppService {
  private accessToken: any = {}

  constructor(private fb: FacebookService, private http: HttpClient) {
    fb.init(initParams)
  }

  private api(path) {
    return this.http.get(baseUrl + path)
  }

  fbLogin(): Observable<any> {
    return Observable.fromPromise(this.fb.login()).map(res => res.authResponse.accessToken)
  }

  apiLogin(provider, token): Observable<any> {
    const url = `/AuthProviders/${provider}/login?token=${token}`
    return this.api(url).map((res: any) => (this.accessToken = res))
  }

  getProfile() {
    const url = `/users/me?access_token=${this.accessToken.id}`
    return this.api(url)
  }

  loginWithFacebook(): Observable<any> {
    return this.fbLogin().flatMap((token: any) => this.apiLogin('facebook', token))
  }
}
