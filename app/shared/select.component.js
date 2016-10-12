"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var SelectComponent = (function () {
    function SelectComponent() {
        this._datas = [];
        this.text = 'text';
        this.isInit = false;
        //ControlValueAccessor
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(SelectComponent.prototype, "datas", {
        get: function () { return this._datas; },
        set: function (datas) {
            datas || (datas = []);
            this._datas = datas;
            if (this.isInit)
                this.initSelect();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectComponent.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            this._current = value;
            this.propagateChange(value);
        },
        enumerable: true,
        configurable: true
    });
    SelectComponent.prototype.select = function (item) {
        this.current = item;
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.isInit = true;
        this.initSelect();
    };
    SelectComponent.prototype.initSelect = function () {
        var datas = this._datas;
        var index = datas.indexOf(this.current);
        if (index < 0) {
            this.select(datas.length > 0 ? datas[0] : null);
        }
    };
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SelectComponent.prototype.registerOnTouched = function () { };
    SelectComponent.prototype.writeValue = function (value) {
        this.current = value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], SelectComponent.prototype, "datas", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "initData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "current", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "text", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'shared-select',
            template: "\n        <div class=\"am-btn-group\" data-am-button>\n        <label class=\"am-btn am-btn-default am-btn-xs\"\n            *ngFor=\"let item of datas\"\n            (click)=\"select(item)\"\n            [class.am-active]=\"current == item\">\n            <input type=\"radio\" /> {{item[text]}}\n        </label>\n    </div>\n    ",
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
