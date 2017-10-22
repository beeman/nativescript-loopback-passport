import { Component, OnInit } from '@angular/core';

import { Provider } from './provider';
import { ProviderService } from './provider.service';

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
    console.log(providerId)
  }

}