import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'minitable',
    templateUrl: 'minitable.component.html'
})
export class MiniTableComponent implements OnInit {

    @Input() datas = [];
    @Input() column = [];

    @Input() pageSize = 10;

    constructor() { }

    ngOnInit() { }
    
}