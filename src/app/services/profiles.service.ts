import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../class/user';
import {Repository} from '../class/repository';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  user:User;
  repos:Repository;
  // private username:string;
  // avatar_url = "./assets/avatar.png"

  constructor(private http:HttpClient) {
    
    this.user= 
      new User("","","","", 0, "", 0, 0, "");
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
     }
     let promise =new Promise((resolve,reject)=>{
      return this.http.get<ApiResponse>("https://api.github.com/users/jackiegatwiri?access_token=" +environment.apiToken).toPromise().then(response=>{
         this.user.name=response.login
         this.user.company=response.login
          this.user.login=response.login
          this.user.avatar_url=response.avatar_url
          this.user.repository=response.public_repos
          this.user.location=response.location
          this.user.followers=response.followers
          this.user.following=response.following
          this.user.html_url=response.html_url


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

getrepositories(){
  interface ApiRepos{ 
    name:string;
    repos_url;
  }
  let promise =new Promise((resolve,reject)=>{
   return this.http.get<ApiRepos>("https://api.github.com/users/jackiegatwiri/repos?access_token=" +environment.apiToken).toPromise().then(response=>{
    this.repos.name=response.name
    this.repos.repos_url=response.repos_url  


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
   }
