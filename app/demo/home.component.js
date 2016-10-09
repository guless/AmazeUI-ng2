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
var rest_service_1 = require('../shared/rest.service');
var HomeComponent = (function () {
    function HomeComponent(rest) {
        this.rest = rest;
        this.newPage = 2300;
        this.order = 308;
        this.visit = 80082;
        this.online = 1300;
        this.table = [];
        this.progress = 0;
        this.browsers = [];
        this.disposed = false;
    }
    HomeComponent.prototype.increase = function () {
        var _this = this;
        if (this.disposed)
            return;
        this.newPage += parseInt((3 + Math.random() * 300) + '', 10);
        this.order += parseInt((1 + Math.random() * 100) + '', 10);
        this.visit += parseInt((10 + Math.random() * 1000) + '', 10);
        this.online += parseInt((2 + Math.random() * 100) + '', 10);
        setTimeout(function () { return _this.increase(); }, parseInt((10 + Math.random() * 1000) + '', 10));
    };
    HomeComponent.prototype.increaseProgress = function () {
        var _this = this;
        if (this.disposed)
            return;
        this.progress += parseInt((1 + Math.random() * 10) + '', 10);
        this.progress %= 100;
        setTimeout(function () { return _this.increaseProgress(); }, parseInt((10 + Math.random() * 1000) + '', 10));
    };
    HomeComponent.prototype.increaseBrowse = function () {
        var _this = this;
        if (this.disposed)
            return;
        this.browsers && this.browsers.forEach(function (item) {
            item.count += parseInt((3 + Math.random() * 30) + '', 10);
        });
        setTimeout(function () { return _this.increaseBrowse(); }, parseInt((10 + Math.random() * 1000) + '', 10));
    };
    HomeComponent.prototype.deleteTableItem = function (item) {
        var index = this.table.indexOf(item);
        if (index >= 0)
            this.table.splice(index, 1);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.increase();
        this.increaseProgress();
        this.rest.getJson('list.json')
            .subscribe(function (rs) { return _this.table = rs.json(); });
        this.rest.getJson('browser.json')
            .subscribe(function (rs) { _this.browsers = rs.json(); _this.increaseBrowse(); });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.disposed = true;
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html'
        }), 
        __metadata('design:paramtypes', [rest_service_1.RestService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
