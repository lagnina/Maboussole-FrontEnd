import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Post } from '../_models/Post';
import { Tag } from '../_models/Tag';
import { User } from '../_models/user';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {



  baseUrl = environment.apiUrl;
  post:Post[]
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private presence: PresenceService) { }

PostCreate(model: any){

  return this.http.post(this.baseUrl + 'post/create', model).pipe(
    map((response:Post ) =>{

      console.log(response);


    })
  )
}

getTags() {

  return this.http.get<Tag[]>(this.baseUrl+ 'tag/GetAllTags',{})
}


getAllPosts(type:string){
   return this.http.get<Post[]>(this.baseUrl + 'post/Posts' ,{params:{Type:type}});
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
