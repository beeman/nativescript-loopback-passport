import { Injectable } from '@angular/core'
import { Resolve, Router } from '@angular/router'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/empty'

import { AppService } from '../app.service'

@Injectable()
export class ProfileResolver implements Resolve<any> {
  constructor(private router: Router, private appService: AppService) {}

  resolve() {
    return this.appService.getProfile().catch(err => {
      console.log('ProfileResolver err', err)
      this.router.navigate(['/login'])
      return Observable.empty()
    })
  }
}
