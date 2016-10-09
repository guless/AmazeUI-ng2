import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module'

import { routing,routeDeclarations } from './demo.routing';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    exports: [],
    declarations: [
        ...routeDeclarations
    ],
    providers: []
})
export class DemoModule { }
