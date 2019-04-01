import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilesService } from 'src/app/services/profiles.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes:Routes=[
  {path:"landing-page",component:LandingPageComponent},
  {path:"profile",component:ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgProgressModule,// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProfilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 