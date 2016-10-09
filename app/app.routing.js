"use strict";
var router_1 = require('@angular/router');
//服务
var rest_service_1 = require('./shared/rest.service');
//组件
var sidebar_component_1 = require('./sidebar.component');
var topbar_component_1 = require('./topbar.component');
//不注册一个component router 会出错。。。。。。。
var home_component_1 = require('./demo/home.component');
exports.routeProviders = [
    rest_service_1.RestService
];
exports.routeDeclarations = [
    sidebar_component_1.SidebarComponent,
    topbar_component_1.TopbarComponent,
    home_component_1.HomeComponent
];
var appRoutes = [
    {
        path: '',
        //redirectTo:'demo',
        //pathMatch:'full'
        component: home_component_1.HomeComponent
    },
    {
        path: 'demo',
        loadChildren: 'app/demo/demo.module#DemoModule'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
