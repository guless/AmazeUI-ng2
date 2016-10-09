import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'shared-select',
    templateUrl: 'select.component.html'
})
export class SelectComponent implements OnInit {

    private _datas = [];

    @Input()
    set datas(datas: any[]) {
        datas || (datas = []);
        this._datas = datas;
        if (this.isInit) this.initSelect();
    }
    get datas() { return this._datas; }

    @Input() initData: any;

    current: any;

    @Output() change = new EventEmitter<any>();

    @Input() text = 'text';

    select(item: any) {
        //console.log('select', item);
        this.current = item;
        this.change.emit(this.current);
    }

    constructor() { }

    isInit = false;
    ngOnInit() {
        this.current = this.initData;
        this.isInit = true;
        this.initSelect();
    }

    initSelect() {
        var datas = this._datas;
        var index = datas.indexOf(this.current);
        if (index < 0) {
            this.select(datas.length > 0 ? datas[0] : null);
        }
    }
}