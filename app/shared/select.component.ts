import { Component, OnInit, Input, Output, EventEmitter,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR  } from '@angular/forms';

@Component({
    selector: 'shared-select',
    template:`
        <div class="am-btn-group" data-am-button>
        <label class="am-btn am-btn-default am-btn-xs"
            *ngFor="let item of datas"
            (click)="select(item)"
            [class.am-active]="current == item">
            <input type="radio" /> {{item[text]}}
        </label>
    </div>
    `,
    providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit,ControlValueAccessor {

    private _datas = [];

    @Input()
    set datas(datas: any[]) {
        datas || (datas = []);
        this._datas = datas;
        if (this.isInit) this.initSelect();
    }
    get datas() { return this._datas; }

    @Input() initData: any;

    private _current:any;
    @Input()
	public get current(): any {
		return this._current;
	}

	public set current(value: any) {
		this._current = value;
        this.propagateChange(value);
	}
    
    @Input() text = 'text';

    select(item: any) {
        this.current = item;
    }

    constructor() { }

    isInit = false;
    ngOnInit() {
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