import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path:'',component:CompanyComponent
        }
      ]
    )
  ]
})
export class CompanyModule { }
