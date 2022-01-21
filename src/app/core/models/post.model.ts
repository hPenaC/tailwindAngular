import { PostCategory, User } from ".";


export interface Post {
    _id:string;
    title:string;
    content:InnerHTML | string;
    abstract:string;    
    createdAt:string;
    category:PostCategory;
    author:User;

}