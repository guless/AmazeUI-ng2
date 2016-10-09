import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//服务
import { RestService } from './shared/rest.service';

//组件
import { SidebarComponent } from './sidebar.component';
import { TopbarComponent } from './topbar.component';

//不注册一个component router 会出错。。。。。。。
import { HomeComponent } from './demo/home.component';

export const routeProviders = [
  RestService
];

export const routeDeclarations = [
  SidebarComponent,
  TopbarComponent,
  HomeComponent
];

const appRoutes: Routes = [
  {
    path: '',
    //redirectTo:'demo',
    //pathMatch:'full'
    component: HomeComponent
  },
  {
    path: 'demo',
    loadChildren: 'app/demo/demo.module#DemoModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);