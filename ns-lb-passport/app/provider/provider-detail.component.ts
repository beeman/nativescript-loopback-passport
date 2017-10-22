import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Provider } from './provider';
import { ProviderService } from './provider.service';

@Component({
  selector: 'ns-details',
  moduleId: module.id,
  templateUrl: './provider-detail.component.html',
})
export class ProviderDetailComponent implements OnInit {
  provider: Provider;

  constructor(private providerService: ProviderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params[ 'id' ];
    this.provider = this.providerService.getProvider(id);
  }
}
