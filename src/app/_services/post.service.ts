import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../_models/Post';
import { PostParams } from '../_models/postParams';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  baseUrl = environment.apiUrl;
  post:Post;

  private currentUserSource = new ReplaySubject<Post>(1);
  currentUser$ = this.currentUserSource.asObservable();
  postParams: any;

  constructor(private http: HttpClient, private presence: PresenceService) {
    this.postParams = new PostParams();

  }

  getParams() {
    return this.postParams;
  }
  setPostParams(params: PostParams) {
    this.postParams = params;
  }
PostCreate(model: any){

  return this.http.post(this.baseUrl + 'post/create', model).pipe(
    map((response:Post ) =>{

      console.log(response);


    })
  )
}




getAllPosts(type: string){
  let params = getPaginationHeaders(this.postParams.pageNumber, this.postParams.pageSize);
  params = params.append('Type',type);


   return getPaginatedResult<Post[]>(this.baseUrl + 'post/posts', params, this.http)
   .pipe(map(response => {
     return response;
   }));
}

getAllPostsByTag( tagId:string){
  let params = getPaginationHeaders(this.postParams.pageNumber, this.postParams.pageSize);
  params = params.append('tagId',tagId);


   return getPaginatedResult<Post[]>(this.baseUrl + 'post/postsByTag', params, this.http)
   .pipe(map(response => {
     return response;
   }));
}
 getPost(postId:Number){

  return this.http.get<Post>(this.baseUrl + 'post/Posts/'+postId);
}


likepost(postId:Number){

  return this.http.post(this.baseUrl + 'postLike/like-post/' + postId ,null);
}

deletePost(postId:Number){

  return this.http.delete(this.baseUrl + 'post/delete-post' + postId);
}
dislikePost(){

}

commentPost(){

}


}
