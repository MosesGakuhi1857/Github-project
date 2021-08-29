import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  {environment} from '../../environments/environment'
import { User } from '../user';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
userCollectedDetails : User;
userRepositories : Repository;
// githubUserName:string


  constructor(private http :HttpClient) {
    this.userCollectedDetails = new User("","","","",0,0,0);
    this.userRepositories = new Repository ("","","")
   }

getUserNameRequest(githubUsername:any){
 interface ApiResponse{
    name:string;
    location:string;
    bio : string;
    avatar_url:string;
    public_repos:number;
    followers:number;
    following:number;
  }
  let promise = new Promise <void>((resolve,reject)=>{
    this.http.get<ApiResponse>(environment.apiUrl + githubUsername + '?access_token='+ environment.apiKey ).toPromise().then((response)=>{
      this.userCollectedDetails= response;
      resolve();
    },
    (error) => {
      reject(error);
      console.log (error)
    }
    )
  });
  return promise
}

getGithubRepoRequest(githubUsername:any){
  interface ApiRepositoryResponse{
    name : string ;
    html_url : string ;
    description : string ;
  

  }
  let repositoryPromise = new Promise <void> ((resolve,reject)=>{
    this.http.get<ApiRepositoryResponse>(environment.apiUrl + githubUsername + '/repos?sort=created&direction=desc?access_token=' + environment.apiKey).toPromise().then((response)=>{
      this.userRepositories = response;
      resolve();
    },
    (error)=>{
      reject(error)
      console.log(error)
    }
    )  
  })
  return repositoryPromise;
}

}
