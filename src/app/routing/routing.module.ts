import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { ProfileComponent } from '../components/profile/profile.component';




const routes:Routes=[
  {path:"",component:LandingPageComponent},
  {path:"profile",component:ProfileComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
 
})
export class RoutingModule { }
