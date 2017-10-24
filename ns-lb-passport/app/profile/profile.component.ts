import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  template: `
    <ActionBar title="Profile" class="action-bar"></ActionBar>

    <StackLayout>
      <Image class="m-t-5 m-b-5 img-circle" horizontalAlignment="center" [src]="profile.avatar" height="170" width="170" ></Image>
      <Label class="h1 title" horizontalAlignment="center" [text]="profile.firstName + ' ' + profile.lastName"></Label>
      <Label class="h2 title" horizontalAlignment="center" [text]="profile.email"></Label>
    </StackLayout>
  `,
})
export class ProfileComponent implements OnInit {
  profile: any = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.profile = this.route.snapshot.data.profile
  }
}
