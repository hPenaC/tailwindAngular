import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule.forChild(
      [
        {
          path:'',component:HomeComponent
        }
      ]
    )
  ]
})
export class HomeModule { }
