import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/Post';
import { PostService } from '../_services/post.service';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { FormationService } from '../_services/formation.service';
import { Formation } from '../_models/Formation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  posts:Post[];
  model:any={};
  formations:Formation[];
  pagination: any;

  constructor(private router: Router,private formationService:FormationService,private postService: PostService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getpost();
  }
  getFormationByDomaine(Domaine :string){
    this.formationService.getFormationByDomaine('Domaine').subscribe(
      response => {
        this.formations= response.result;
        this.pagination = response.pagination;
        console.log(response.result)
      })
  }
  getpost() {
    this.postService.getAllPosts('actualite').subscribe(response => {
      console.log(response);
     this.posts = response.result;
     console.log(this.posts)
    });
    

    }

    registerToggle() {
      this.router.navigateByUrl('/Register')
    }

    cancelRegisterMode(event: boolean) {
      this.registerMode = event;
    }
    
  Post(){
    this.model.Type = 'actualite'
    this.postService.PostCreate(this.model).subscribe(response => {
      this.router.navigateByUrl('Actuality');
      window.location.reload();      })
  }
  


  }




