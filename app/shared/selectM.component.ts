import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'shared-select-m',
    templateUrl: 'SelectM.component.html'
})
export class SelectMComponent implements OnInit {

    @Input() text = 'text';

    private _datas = [];

    @Input()
    set datas(datas: any[]) {
        datas || (datas = []);
        this._datas = datas;

        if (this.isInit){
            this.initSelect();
        };
    }
    get datas() { return this._datas; }

    @Input() initData = [];

    current = [];

    @Output() change = new EventEmitter<any>();

    constructor() { }

    isInit = false;
    ngOnInit() {
        //console.log(this.current, this.datas);
        this.current = this.initData;
        this.isInit = true; 
        this.initSelect();
    }
    initSelect() {
        var list = [];
        if (this._datas.length > 0) {
            this.current.forEach((item) => {
                if (this._datas.indexOf(item) >= 0)
                    list.push(item);
            });
            this.current = list;
        }
        this.change.emit(list);
    }

    isSelect(item: any) {
        //console.log('iselect', this.current.indexOf(item)>=0 , item);
        return this.current.indexOf(item) >= 0;
    }

    select(item: any) {
        setTimeout(()=>{
            //console.log(item);
            var index = this.current.indexOf(item);
            if (index >= 0)
                this.current.splice(index, 1);
            else
                this.current.push(item);
            //console.log(index, this.current, item);
            this.change.emit(this.current);

        },1);
    }
}