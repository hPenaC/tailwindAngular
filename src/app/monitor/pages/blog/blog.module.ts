import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogComponent } from "./blog.component";
import { RouterModule } from "@angular/router";
import { EntryComponent } from "./entry/entry.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [BlogComponent, EntryComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        data: { breadcrum: "Blog" },
        children: [
          { path: "", component: BlogComponent },
          {
            path: ":id",
            component: EntryComponent,
            data: { breadcrum: "Post" },
          },
        ],
      },
    ]),
  ],
})
export class BlogModule {}
