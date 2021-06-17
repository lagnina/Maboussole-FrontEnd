import { Photo } from "./photo";

export interface Post {
    postId:Number;
    posterId:Number;
    DateCreated:Date;
    content:string;
    photos:Photo[];

}