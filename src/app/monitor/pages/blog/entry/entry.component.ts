import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Post } from 'src/app/core/models';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  post!:Post;
  loading:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,private router:Router, private postService: PostService) {}

  ngOnInit(): void {
    this.loading=true;
    this.getThePost();
  }

  getThePost(){
    this.activatedRoute.url.pipe(map(url=>url[0].path),switchMap((id:string)=>this.postService.getPostById(id))).subscribe((post:Post)=>
      {                
        console.log('Post:',post);
        this.post = post;
        this.loading=false;
      },
      (err)=>{
        console.log('Error Found, Navigating to Blog');
        this.router.navigate(['/blog']);
      }
    );
  }

}
