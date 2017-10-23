import { Component, OnInit } from '@angular/core';

import * as http from 'tns-core-modules/http';

import { Provider } from './provider';
import { ProviderService } from './provider.service';

import { login as loginFacebook } from './provider.facebook'

@Component({
  selector: 'ns-providers',
  moduleId: module.id,
  templateUrl: './providers.component.html',
})
export class ProvidersComponent implements OnInit {
  providers: Provider[];
  result = {}

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.providers = this.providerService.getProviders();
  }

  getProfile(provider, token) {
    const baseUrl = 'http://localhost:3000/api'
    const url = `${baseUrl}/AuthProviders/${provider}/login?token=${token}`
    return http.getJSON(url)
  }

  onTap(providerId: string): void {
    switch (providerId) {
      case 'facebook':
        loginFacebook()
          .then((token: any) => this.getProfile(providerId, token))
          .then((res: any) =>  this.result = res)
          .catch(err => alert(err))
        break;
      default:
        console.log(`Unknown provider ${providerId}`)
    }
  }

}