import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { SharedModule } from '../shared/shared.module'

import { routing,routeDeclarations } from './demo.routing';

@NgModule({
    imports: [
        SharedModule,
        routing,
        FormsModule
    ],
    exports: [],
    declarations: [
        ...routeDeclarations
    ],
    providers: []
})
export class DemoModule { }
