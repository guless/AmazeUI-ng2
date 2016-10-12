import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

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
    imports: [CommonModule, FormsModule],
    exports: [
        ...components,
        CommonModule, FormsModule
    ],
    declarations: [
        ...components
    ],
    providers: []
})
export class SharedModule { }
