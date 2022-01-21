import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService { 

  constructor(private http:HttpClient) {}

  public getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${environment.apiUrl}/post`).pipe(catchError(err=>{
      console.log("Error:",err);
      return of([]);
    }));
  }

  public getPostById(id:string):Observable<Post>{
    return this.http.get<Post>(`${environment.apiUrl}/post/${id}`);
  }
}
