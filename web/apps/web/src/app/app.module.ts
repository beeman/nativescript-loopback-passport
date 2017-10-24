import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { NxModule } from '@nrwl/nx'
import { Route, RouterModule } from '@angular/router'
import { FacebookModule } from 'ngx-facebook'
import { AppService } from './app.service'
import { HttpClientModule } from '@angular/common/http'

const routes: Route[] = [{ path: '', loadChildren: './main/main.module#MainModule' }]

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NxModule.forRoot(),
    FacebookModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AppService],
})
export class AppModule {}
