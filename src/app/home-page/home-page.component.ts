import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
import { User } from '../user';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 data:User;
 repositories:any;

  constructor(private githubService:GithubService) { }

  ngOnInit():void {
    this.getUserName("MosesGakuhi1857");
    this.getGithubRepo("MosesGakuhi1857");
  }
getUserName(githubUsername:any){
  this.githubService.getUserNameRequest(githubUsername).then((response)=>{
this.data= this.githubService.userCollectedDetails
  },
  (error)=>{
    console.log(error)
    
  }
  );
}
  getGithubRepo(githubUsername:any){
    this.githubService.getGithubRepoRequest(githubUsername).then((response:any)=>{
      this.repositories=this.githubService.userRepositories
      console.log(this.repositories)
    },
    (error)=>{
      console.log(error)
    }
    )
  }



}
