import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {FormsModule} from '@angular/forms';
import {RoutingModule} from './routing/routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesService } from 'src/app/services/profiles.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UnderlineDirective } from './underline.directive';

// const routes:Routes=[
//   {path:"",component:LandingPageComponent},
//   {path:"profile",component:ProfileComponent}
// ]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    NavbarComponent,
    UnderlineDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    AppRoutingModule,
    NgProgressModule,// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    // RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 