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
var SelectMComponent = (function () {
    function SelectMComponent() {
        this.text = 'text';
        this._datas = [];
        this.initData = [];
        this.isInit = false;
        //ControlValueAccessor
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(SelectMComponent.prototype, "datas", {
        get: function () { return this._datas; },
        set: function (datas) {
            datas || (datas = []);
            this._datas = datas;
            if (this.isInit) {
                this.initSelect();
            }
            ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectMComponent.prototype, "current", {
        get: function () {
            return this._current;
        },
        set: function (value) {
            this._current = value;
        },
        enumerable: true,
        configurable: true
    });
    SelectMComponent.prototype.ngOnInit = function () {
        this.current = this.initData;
        this.isInit = true;
        this.initSelect();
    };
    SelectMComponent.prototype.initSelect = function () {
        var _this = this;
        var list = [];
        if (this._datas.length > 0) {
            this.current.forEach(function (item) {
                if (_this._datas.indexOf(item) >= 0)
                    list.push(item);
            });
            this.current = list;
        }
        this.propagateChange(this.current);
    };
    SelectMComponent.prototype.isSelect = function (item) {
        return this.current && this.current.indexOf(item) >= 0;
    };
    SelectMComponent.prototype.select = function (item) {
        var _this = this;
        setTimeout(function () {
            var index = _this.current ? _this.current.indexOf(item) : -1;
            if (index >= 0)
                _this.current.splice(index, 1);
            else
                _this.current.push(item);
            _this.propagateChange(_this.current);
        }, 1);
    };
    SelectMComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SelectMComponent.prototype.registerOnTouched = function () { };
    SelectMComponent.prototype.writeValue = function (value) {
        this.current = value;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectMComponent.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], SelectMComponent.prototype, "datas", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectMComponent.prototype, "initData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectMComponent.prototype, "current", null);
    SelectMComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shared-select-m',
            template: "<div class=\"am-btn-group\" data-am-button>\n          <label class=\"am-btn am-btn-default am-btn-xs\"\n            *ngFor=\"let item of datas\"\n            (click)=\"select(item)\"\n            [class.am-active]=\"isSelect(item)\">\n            <input type=\"checkbox\"> {{item[text]}}\n          </label>\n        </div>",
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return SelectMComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SelectMComponent);
    return SelectMComponent;
}());
exports.SelectMComponent = SelectMComponent;
