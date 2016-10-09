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
var SelectMComponent = (function () {
    function SelectMComponent() {
        this.text = 'text';
        this._datas = [];
        this.initData = [];
        this.current = [];
        this.change = new core_1.EventEmitter();
        this.isInit = false;
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
    SelectMComponent.prototype.ngOnInit = function () {
        //console.log(this.current, this.datas);
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
        this.change.emit(list);
    };
    SelectMComponent.prototype.isSelect = function (item) {
        //console.log('iselect', this.current.indexOf(item)>=0 , item);
        return this.current.indexOf(item) >= 0;
    };
    SelectMComponent.prototype.select = function (item) {
        var _this = this;
        setTimeout(function () {
            //console.log(item);
            var index = _this.current.indexOf(item);
            if (index >= 0)
                _this.current.splice(index, 1);
            else
                _this.current.push(item);
            //console.log(index, this.current, item);
            _this.change.emit(_this.current);
        }, 1);
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
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SelectMComponent.prototype, "change", void 0);
    SelectMComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'shared-select-m',
            templateUrl: 'SelectM.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SelectMComponent);
    return SelectMComponent;
}());
exports.SelectMComponent = SelectMComponent;
