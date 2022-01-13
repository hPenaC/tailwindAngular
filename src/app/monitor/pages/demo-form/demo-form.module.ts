import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFormComponent } from './demo-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DemoFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path:'',component:DemoFormComponent
        }
      ]
    )
  ]
})
export class DemoFormModule { }
