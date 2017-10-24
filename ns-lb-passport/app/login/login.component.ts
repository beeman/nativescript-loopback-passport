import { Component, OnInit } from '@angular/core';

import { AuthProvider } from './auth-provider';
import { LoginService } from './login.service';

@Component({
  selector: 'ns-providers',
  moduleId: module.id,
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  providers: AuthProvider[];

  constructor(private providerService: LoginService) {}

  ngOnInit(): void {
    this.providers = this.providerService.getAuthProviders();
  }

  onTap(providerId: string): void {
    this.providerService.login(providerId)
  }

}