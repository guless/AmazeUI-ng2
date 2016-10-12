import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select.component'
import { SelectMComponent } from './selectM.component'
import { PagebarComponent } from './pagebar.component'
import { MiniTableComponent } from './miniTable.component'

const components = [
    SelectComponent,
    SelectMComponent,
    PagebarComponent,
    MiniTableComponent
];

@NgModule({
    imports: [CommonModule],
    exports: [
        ...components
    ],
    declarations: [
        ...components
    ],
    providers: [],
    schemas:[NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
