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
var FormComponent = (function () {
    function FormComponent() {
        this.selectDatas = [{ id: 1, text: '正常' }, { id: 2, text: '待审核' }, { id: 3, text: '不显示' }];
        this.selectCurrent = this.selectDatas[1];
        this.selectDatasM = [{ id: 1, text: '允许评论' }, { id: 2, text: '置顶' }, { id: 3, text: '推荐' }, { id: 4, text: '热门' }, { id: 5, text: '轮播图' }];
        this.selectCurrentM = this.selectDatasM.slice(1, 3);
        this.saveData = '';
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.selectChange = function (item) {
        this.selectCurrent = item;
    };
    FormComponent.prototype.selectChangeM = function (items) {
        //console.log('aaaa');
        this.selectCurrentM = items;
    };
    FormComponent.prototype.save = function () {
        var saveData = {
            select1: this.selectCurrent ? this.selectCurrent.id : '',
            select2: this.selectCurrentM.map(function (item) { return item.id; })
        };
        this.saveData = JSON.stringify(saveData);
    };
    FormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-form',
            templateUrl: 'form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
