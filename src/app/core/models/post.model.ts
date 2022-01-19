export interface Post {
    id:number|string;
    title:string;
    content:InnerHTML | string;
    date:Date;
}