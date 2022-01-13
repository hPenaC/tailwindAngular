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
					},
          {
						path: 'platform',
            loadChildren: () => import('./pages/platform/platform.module').then(mod => mod.PlatformModule)
					},
          {
						path: 'company',
            loadChildren: () => import('./pages/company/company.module').then(mod => mod.CompanyModule)
					},
          {
						path: 'blog',
            loadChildren: () => import('./pages/blog/blog.module').then(mod => mod.BlogModule)
					},
          {
						path: 'request-demo',
            loadChildren: () => import('./pages/demo-form/demo-form.module').then(mod => mod.DemoFormModule)
					},
          
        ]
      }
    ])
  ]
})
export class MonitorModule { }
