import { AfterViewInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/_models/Post';
import { Tag } from 'src/app/_models/Tag';
import { PostService } from 'src/app/_services/post.service';
import { TagService } from 'src/app/_services/tag.service';

@Component({
  selector: 'app-conseil-detail',
  templateUrl: './conseil-detail.component.html',
  styleUrls: ['./conseil-detail.component.css']
})
export class ConseilDetailComponent implements OnInit {
  
 post:Post;
 tags:Tag[];





  constructor(private tagService :TagService,private postService :PostService,private route: ActivatedRoute ) { }

  ngOnInit(): void {
console.log(this.route.snapshot.params.id)

    this.postService.getPost(this.route.snapshot.params.id)
    .subscribe(response => {
    this.post=response;
    console.log(response);
    })

    this.tagService.getTags().subscribe(response=>{
      this.tags=response;
     })


  }

}
