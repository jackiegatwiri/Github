import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../class/user';
import {environment} from '../../environments/environment';
import { RepositoryService } from 'src/app/services/repository.service';
import { Repository } from '../class/repository'

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {
  user:User;
  loading = false;
  repos: Repository[];
  
  private username:string;
  

  constructor(private http:HttpClient, private service: RepositoryService ) {
    
    this.user= 
      new User("","","","", 0, "", 0, 0, "");
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
     }
     
     let promise =new Promise((resolve,reject)=>{
      return this.http.get<ApiResponse>("https://api.github.com/users/" +this.username+ "?access_token=" ).toPromise().then(response=>{
         this.user.name=response.name
         this.user.company=response.company
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
public getUsers(event: any) {
  this.loading = true;
  // tslint:disable-next-line:prefer-const
  let promise = new Promise((resolve , reject) => {
   this.service.getRepos(this.username).toPromise().then(response => {
     this.repos = response; this.loading = false; // this will push all data to array [repo]
      resolve();
    },
    error => {
      alert('error occured')
      this.loading = false;
    }
  );
  });
  return promise;
 }
updateProfile(username:string){
  this.username=username;
}
   }

