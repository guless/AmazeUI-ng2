import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { routing, routeDeclarations }   from './page.routing';

@NgModule({
    imports: [
        routing,
        FormsModule
    ],
    exports: [],
    declarations: [
        ...routeDeclarations
    ],
    providers: []
})
export class PageModule { }
