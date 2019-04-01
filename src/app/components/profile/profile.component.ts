import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { User } from 'src/app/class/user';
import {Repos} from 'src/app/class/repos';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:User;
  username:string;
  repos:Repos[];
  loading:boolean=false;
  errormessage:any;
  

  constructor(private profilesService:ProfilesService) { }
  locateUserProfile(){
    this.profilesService.updateProfile(this.username);
    this.profilesService.userRequest()
    this.user= this.profilesService.user
  }
  public getRepos(){
    this.loading=true;
    this.errormessage='';
 
    this.profilesService.getRepos(this.username).subscribe((response)=>{this.repos=response;},
    (error)=>{this.errormessage=error;this.loading=false;},()=>{this.loading=false;})
 
  }
  ngOnInit() {
    this.profilesService.userRequest()
    this.user= this.profilesService.user
    
  }

}
