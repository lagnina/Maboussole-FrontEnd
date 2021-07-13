import { Photo } from "./photo";

export interface Post {
    postId:Number;
    title:string;
    posterId:Number;
    posterName:string;
    dateCreated:Date;
    posterPhotoUrl:string;
    content:string;
    speciality :string;
    Type:string;
    photos:Photo[];
    likes:Number;
    isLiked:boolean;
    photoUrl:Photo[];
    
}