import { Component, OnInit } from '@angular/core';

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

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.providers = this.providerService.getProviders();
  }

  onTap(providerId: string): void {
    switch (providerId) {
      case 'facebook':
        loginFacebook()
          .then((res: any) => {
            console.log('provider', providerId)
            console.log('res', JSON.stringify(res))
            alert(`Welcome ${res.firstName}`)
          })
          .catch(err => alert(err))
        break;
      default:
        console.log(`Unknown provider ${providerId}`)
    }
  }

}