import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_models/member';
import { Post } from 'src/app/_models/Post';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { PostService } from '../../_services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  options: string[] = ['Informatics', 'Economics', 'Engineering', 'Statictics', 'Psychology', 'Chemistry', 'Other']
  model: any = {}

  response: any = {}
  @Input() post: Post;
  member: Member;
  user: User;

  constructor(private accountService: AccountService, private memberService: MembersService, 
    private toastr: ToastrService, private postService: PostService, private router: Router
   ) { }

  ngOnInit(): void {
    console.log(this.post)
  }

  deletePost() {


  }
  getDetails() {


  }
  dislikePost() {


  }
  likePost(post: Post) {

    this.postService.likepost(post.postId).subscribe(() => {

      this.toastr.success('you have liked this post');
      window.location.reload();
    })



  }

}