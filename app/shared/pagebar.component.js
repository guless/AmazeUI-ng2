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
var PagebarComponent = (function () {
    function PagebarComponent() {
        this._datas = [];
        this._pageSize = 10;
        this._curPage = 1;
        this._totalPage = 0;
        this.curDatas = [];
        this.total = 0;
        this.type = 0;
        this.pages = [];
        this.change = new core_1.EventEmitter();
    }
    Object.defineProperty(PagebarComponent.prototype, "datas", {
        get: function () { return this._datas; },
        set: function (datas) {
            this._datas = datas || [];
            this.total = this.datas && this.datas.length || 0;
            this.calcTotalPage();
            if (this.curPage != 1)
                this.curPage = 1;
            else
                this.takeDatas(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagebarComponent.prototype, "pageSize", {
        get: function () { return this._pageSize; },
        set: function (size) {
            this._pageSize = size;
            this.calcTotalPage();
            if (this.curPage != 1)
                this.curPage = 1;
            else
                this.takeDatas(1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagebarComponent.prototype, "curPage", {
        get: function () { return this._curPage; },
        set: function (page) {
            this._curPage = page;
            this.takeDatas(page);
            ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagebarComponent.prototype, "totalPage", {
        get: function () { return this._totalPage; },
        set: function (tPage) {
            this._totalPage = tPage;
            var total = tPage, list = [];
            for (var i = 1; i <= total; i++)
                list.push(i);
            this.pages = list;
        },
        enumerable: true,
        configurable: true
    });
    PagebarComponent.prototype.setPage = function (page) {
        this.curPage = page <= 0 ? 1 : (page > this.totalPage ? this.totalPage : page);
    };
    ;
    PagebarComponent.prototype.takeList = function (list, size, cur) {
        if (!list)
            return list;
        var index = size * (cur - 1);
        return list.slice(index, index + size);
    };
    PagebarComponent.prototype.takeDatas = function (cur) {
        var curDatas = this.curDatas = this.takeList(this.datas, this.pageSize, cur);
        this.change.emit(curDatas);
    };
    PagebarComponent.prototype.calcTotalPage = function () {
        var length = this.datas ? this.datas.length : 0, isAdd = (length % this.pageSize) != 0;
        this.totalPage = parseInt((length / this.pageSize).toString()) + (isAdd ? 1 : 0);
    };
    PagebarComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], PagebarComponent.prototype, "datas", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PagebarComponent.prototype, "pageSize", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PagebarComponent.prototype, "curPage", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], PagebarComponent.prototype, "totalPage", null);
    PagebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pagebar',
            templateUrl: 'pagebar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PagebarComponent);
    return PagebarComponent;
}());
exports.PagebarComponent = PagebarComponent;
