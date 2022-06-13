import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = "Home Page"
    repos: any;

    constructor(private githubService: GithubService) {}

    ngOnInit(): void {
    }

    showList(obj: any) {
      this.githubService.getRepositoriesByUsername(obj.username).subscribe((data: any)=>{
        this.repos = data;
      })  
    }
}