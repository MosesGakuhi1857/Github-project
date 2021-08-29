import { Component, OnInit,ViewChild } from '@angular/core';
import { GithubService } from '../service/github.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-username',
  templateUrl: './search-username.component.html',
  styleUrls: ['./search-username.component.css']
})
export class SearchUsernameComponent implements OnInit {
    
  data:any;
  repositories:any;
  searchTerm: string;
  displayUserDetailContainer = false;
  displayGithubUserErrorNotFound = false;
  displayUserRepositoryList = false;
  displayUserErrorMessage = false;

  // accessing the form inputs
  @ViewChild('searchRef') searchForm: NgForm;

  constructor(private userservice :GithubService ) { }

  

  ngOnInit(): void {}
      // search github user
  searchGithubUser(){
    console.log(this.searchTerm)
    this.userservice.getUserNameRequest(this.searchTerm).then(
      (response) => {
          this.data = this.userservice.userCollectedDetails;
          this.displayUserDetailContainer = true;
      },
      (error) => {
        console.log(error);
        this.displayGithubUserErrorNotFound = true;
      }
    );

  
  // this.searchTerm = this.searchForm.value.search;
  this.userservice.getGithubRepoRequest(this.searchTerm).then(
    (response) => {
      this.repositories = this.userservice.userRepositories;
      console.log(this.searchTerm)
      this.displayUserRepositoryList = true;
    },
    (error) => {
      this.displayUserErrorMessage = true;
      console.log(error);
    }
  ); // end of searchGithubUserRepositories
  }
  
}
