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
  expanded = false


  response: any = {}
  data: any={}
  @Input() post: Post;
  member: Member;
  user: User;

  constructor(private accountService: AccountService, private memberService: MembersService, 
    private toastr: ToastrService, private postService: PostService, private router: Router
   ) { 
    if (this.data) {
      this.expanded = this.data.expanded
      this.post = this.data.post
    }
   }

  ngOnInit(): void {
  }

  // ExpandCard(postId) {
  //   this.expanded = !this.expanded

  //   if (this.expanded) {
  //     this.getComments(postId)
  //   }
  // }
  // onTableScroll(e, postId) {
  //   if (this.commentResult.rowCount > this.commentResult.results.length && !this.laoding) {
  //     const tableViewHeight = e.target.offsetHeight // viewport
  //     const tableScrollHeight = e.target.scrollHeight // length of all table
  //     const scrollLocation = e.target.scrollTop; // how far user scrolled

  //     // If the user has scrolled within 200px of the bottom, add more data
  //     const buffer = 50;
  //     const limit = tableScrollHeight - tableViewHeight - buffer;
  //     if (scrollLocation > limit) {
  //       this.laoding = true
  //       this.commentService.getComments(postId, this.commentActivePage + 1, environment.PAGE_SIZE).subscribe(res => {
  //         res.results.forEach(p => {
  //           this.commentResult.results.push(p)
  //         })
  //         this.commentActivePage++
  //         this.laoding = false
  //       }, error => {
  //         this.laoding = false
  //       })
  //     }
  //   }

  // }

  deletePost() {


  }
  getDetails() {


  }
  dislikePost() {


  }
  likePost(post: Post) {

    this.postService.likepost(post.postId).subscribe(() => {

      this.toastr.success('you have liked this post');
    })



  }

}