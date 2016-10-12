import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'shared-select-m',
    template:`<div class="am-btn-group" data-am-button>
          <label class="am-btn am-btn-default am-btn-xs"
            *ngFor="let item of datas"
            (click)="select(item)"
            [class.am-active]="isSelect(item)">
            <input type="checkbox"> {{item[text]}}
          </label>
        </div>`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectMComponent),
            multi: true
        }
    ]
})
export class SelectMComponent implements OnInit, ControlValueAccessor {

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

    private _current:any;
    @Input()
	public get current(): any {
		return this._current;
	}
	public set current(value: any) {
		this._current = value;
	}

    constructor() { }

    isInit = false;
    ngOnInit() {
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
        this.propagateChange(this.current);
    }

    isSelect(item: any) {
        return this.current && this.current.indexOf(item) >= 0;
    }

    select(item: any) {
        setTimeout(()=>{
            var index = this.current ? this.current.indexOf(item) : -1;
            if (index >= 0)
                this.current.splice(index, 1);
            else
                this.current.push(item);
            this.propagateChange(this.current);

        },1);
    }

    //ControlValueAccessor
    propagateChange = (_: any) => { };
    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() { }

    writeValue(value: any) {
        this.current = value;
    }
    //end ControlValueAccessor
}