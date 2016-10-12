import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module'

import { routing, routeDeclarations }   from './page.routing';

@NgModule({
    imports: [
        routing,
        SharedModule
    ],
    exports: [],
    declarations: [
        ...routeDeclarations
    ],
    providers: []
})
export class PageModule { }
