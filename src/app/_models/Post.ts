import { Photo } from "./photo";

export interface Post {
    postId:Number;
    Title:string;
    posterId:Number;
    DateCreated:Date;
    content:string;
    Type:string;
    photos:Photo[];
    Likes:Number;
    isLiked:boolean;

}