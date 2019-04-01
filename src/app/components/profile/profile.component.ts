import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { User } from 'src/app/class/user';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
