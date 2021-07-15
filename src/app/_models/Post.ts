import { Photo } from "./photo";

export interface Post {
    postId:Number;
    title:string;
    posterId:Number;
    posterName:string;
    dateCreated:Date;
   // PhotoUrl: string;
    posterPhotoUrl:string;
    content:string;
    speciality :string;
    Type:string;
    photos:Photo[];
    likes:Number;
    photoUrl:Photo[];
    isLiked:boolean;
    
}