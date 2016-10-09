import { NgModule } from '@angular/core';
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
})
export class SharedModule { }
