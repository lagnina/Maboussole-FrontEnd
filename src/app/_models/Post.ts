import { Photo } from "./photo";

export interface Post {
    postId:Number;
    Title:string;
    posterId:Number;
    posterName:string;
    DateCreated:Date;
    content:string;
    Type:string;
    photos:Photo[];
    likes:Number;
    isLiked:boolean;
    photoUrl:Photo[];
    
}