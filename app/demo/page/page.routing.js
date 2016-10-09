"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./user.component');
var help_component_1 = require('./help.component');
var gallery_component_1 = require('./gallery.component');
var log_component_1 = require('./log.component');
var h404_component_1 = require('./h404.component');
exports.routeDeclarations = [
    user_component_1.UserComponent,
    help_component_1.HelpComponent,
    gallery_component_1.GalleryComponent,
    log_component_1.LogComponent,
    h404_component_1.H404Component
];
var routes = [
    {
        path: '',
        redirectTo: '/demo/page/user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: 'help',
        component: help_component_1.HelpComponent
    },
    {
        path: 'gallery',
        component: gallery_component_1.GalleryComponent
    },
    {
        path: 'log',
        component: log_component_1.LogComponent
    },
    {
        path: 'h404',
        component: h404_component_1.H404Component
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
