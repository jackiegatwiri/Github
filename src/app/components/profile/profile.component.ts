import { Component, OnInit } from '@angular/core';
import { ProfilesService } from 'src/app/services/profiles.service';
import { User } from 'src/app/class/user';
import {Repository} from 'src/app/class/repository';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user:User;
  public repos:Repository;

  constructor(private profilesService:ProfilesService) { }

  ngOnInit() {
    this.profilesService.userRequest()
    this.user= this.profilesService.user
    this.profilesService.getrepositories()
    this.repos= this.profilesService.repos
  }

}