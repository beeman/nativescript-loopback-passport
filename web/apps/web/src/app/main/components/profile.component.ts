import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile1',
  template: `
    <div class="row justify-content-md-center" *ngIf="profile">
      <div class="col-lg-4 col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <img [attr.src]="profile.avatar" class="img-fluid rounded-circle mx-auto d-block">
              </div>
            </div>
            <div class="row">
              <div class="col text-center">
                <h2 class="display-4">{{ profile.firstName }} {{ profile.lastName }}</h2>
                <p>{{ profile.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProfileComponent {
  profile: any = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.profile = this.route.snapshot.data.profile
  }
}
