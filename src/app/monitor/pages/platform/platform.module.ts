import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformComponent } from './platform.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PlatformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path:'',component:PlatformComponent
        }
      ]
    )
  ]
})
export class PlatformModule { }
