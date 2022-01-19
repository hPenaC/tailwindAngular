import { Component, OnInit } from "@angular/core";
import { Post } from "src/app/core/models/post.model";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  exampleBlog: Post = {
    id: 1,
    title: "Título de Ejemplo Título de Ejemplo Título de Ejemplo",
    date: new Date(),
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est sapien, sed mattis metus accumsan in. Integer nibh urna, feugiat eget lectus in, hendrerit feugiat est. Sed non erat pulvinar, tempor quam et, consectetur sapien. Morbi eget nibh ac ante fringilla facilisis. Nam sed diam turpis. Etiam lacinia sodales magna, non consequat nunc posuere vel. Cras gravida et tellus nec sagittis. Nunc scelerisque facilisis placerat. Ut eget lorem non mauris placerat congue eget ut enim. Sed in quam magna.

    Praesent eget nunc sit amet dolor interdum mattis. Sed ullamcorper massa in erat consequat, nec imperdiet ligula vehicula. Pellentesque nec lacus libero. Integer blandit turpis vitae consequat pharetra. Duis euismod sagittis eros eu bibendum. Suspendisse pulvinar est in sem malesuada cursus. Fusce eget scelerisque massa. Sed non leo ligula. Sed pellentesque aliquam purus rhoncus fermentum. Pellentesque neque mi, scelerisque et sapien et, posuere placerat urna.`,
  };

  constructor() {}

  ngOnInit(): void {}
}
