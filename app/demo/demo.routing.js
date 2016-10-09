"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var form_component_1 = require('./form.component');
var table_component_1 = require('./table.component');
//HomeComponent已经在app.module导入？
exports.routeDeclarations = [
    form_component_1.FormComponent,
    table_component_1.TableComponent
];
var routes = [
    {
        path: '',
        redirectTo: '/demo/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'table',
        component: table_component_1.TableComponent
    },
    {
        path: 'form',
        component: form_component_1.FormComponent
    },
    {
        path: 'page',
        loadChildren: 'app/demo/page/page.module#PageModule'
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
