import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorComponent } from './monitor.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MonitorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path:'',
        component:MonitorComponent,
        children: [
          {
						path: '',
            loadChildren: () => import('./pages/home/home.module').then(mod => mod.HomeModule)
					}
        ]
      }
    ])
  ]
})
export class MonitorModule { }
