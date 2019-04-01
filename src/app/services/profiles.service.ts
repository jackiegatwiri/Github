import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../class/user';
import {environment} from '../../environments/environment';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Repos} from '../class/repos';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  user:User;
  repos:Repos;
  private username:string;
  

  constructor(private http:HttpClient, ) {
    
    this.user= 
      new User("","","","", 0, "", 0, 0, "", "");
      this.username="jackiegatwiri";
   }
   userRequest(){
    interface ApiResponse{ 
    name:string;
    company:string;
    login:string;
     avatar_url;
     public_repos:number;
     location:any;
     followers: number;
     following: number;
     html_url;
     created_at;
     }
     
     let promise =new Promise((resolve,reject)=>{
      return this.http.get<ApiResponse>("https://api.github.com/users/" +this.username+ "?access_token=" +environment.apiToken).toPromise().then(response=>{
         this.user.name=response.name
         this.user.company=response.company
          this.user.login=response.login
          this.user.avatar_url=response.avatar_url
          this.user.repository=response.public_repos
          this.user.location=response.location
          this.user.followers=response.followers
          this.user.following=response.following
          this.user.html_url=response.html_url
          this.user.created_at=response.created_at


          resolve()
      },
      error=>{
        this.user.login="Unknown User"
        this.user.location="Unknown Location"
        reject(error)
    }
)
})

return promise

}

updateProfile(username:string){
  this.username=username;
}

baseUrl:string = "https://api.github.com/";
getRepos(username: string):Observable<Repos[]>{
return this.http.get<Repos[]>(this.baseUrl + 'users/' + this.username + '/repos?access_token='+ environment.apiToken)
}
   }

