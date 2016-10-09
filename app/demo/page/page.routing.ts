import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { HelpComponent } from './help.component';
import { GalleryComponent } from './gallery.component';
import { LogComponent } from './log.component';
import { H404Component } from './h404.component';

export const routeDeclarations = [
    UserComponent,
    HelpComponent,
    GalleryComponent,
    LogComponent,
    H404Component
];

const routes: Routes = [
    {
        path: '',
        redirectTo: '/demo/page/user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'help',
        component: HelpComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'log',
        component: LogComponent
    },
    {
        path: 'h404',
        component: H404Component
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);