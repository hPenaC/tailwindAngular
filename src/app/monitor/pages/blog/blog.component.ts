import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/core/models/post.model";
import { PostService } from "src/app/core/services/post.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  loading!: boolean;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loading = true;
    this.postService.getAllPosts().subscribe((res: Post[]) => {
      console.log("Respuesta :",res.map(post=>{return{... post,date:new Date(post.createdAt).getTime()}}));
      this.posts = res;
      this.loading=false;
    });
  }
}
