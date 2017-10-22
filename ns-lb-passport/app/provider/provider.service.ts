import { Injectable } from '@angular/core';

import { Provider } from './provider';

@Injectable()
export class ProviderService {
  private providers = new Array<Provider>(
    { id: 'facebook', name: 'Facebook', color: '#3B5998', icon: '&#xf09a;' },
    { id: 'twitter', name: 'Twitter', color: '#3B5998', icon: '&#xf099;' },
  );

  getProviders(): Provider[] {
    return this.providers;
  }

  getProvider(id: string): Provider {
    return this.providers.filter(provider => provider.id === id)[ 0 ];
  }
}
