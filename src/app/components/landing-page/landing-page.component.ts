import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { User } from 'src/app/class/user';
import {Repos} from 'src/app/class/repos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public user:User;
  username:string;

  constructor(private profilesService:ProfilesService) { }
  locateUserProfile(){
    this.profilesService.updateProfile(this.username);
    this.profilesService.userRequest()
    this.user= this.profilesService.user
    
  }

  ngOnInit() {
    this.profilesService.userRequest()
    this.user= this.profilesService.user
    
  }

}
