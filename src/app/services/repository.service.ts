import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

import { Observable } from 'rxjs';
import { Repository } from '../class/repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  repos: Repository[];
  mainUrl= "https://api.github.com" 
  constructor(private http:HttpClient) { }
  getRepos(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.mainUrl + '/users/' + username + '/repos' +environment.apiToken);
}

  }
