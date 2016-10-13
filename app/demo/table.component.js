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
var TableComponent = (function () {
    function TableComponent() {
        this.tableColumn = [];
        this.tableDatas = [];
    }
    TableComponent.prototype.print = function (cell) {
        console.log(cell);
    };
    TableComponent.prototype.del = function (row) {
        this.tableDatas = this.tableDatas.filter(function (item) { return item != row; });
    };
    TableComponent.prototype.ngOnInit = function () {
        this.tableColumn = [{
                name: 'id',
                title: 'ID',
                width: 50
            }, {
                name: 'title',
                title: '标题',
                template: this.rowName
            }, {
                name: 'type',
                title: '类别',
                width: 70,
                formatter: function (cellvalue, col, row) {
                    return cellvalue;
                }
            }, {
                name: 'user',
                title: '作者',
                width: 80
            }, {
                name: 'date',
                title: '修改日期',
                width: 180
            }, {
                name: '',
                title: '操作',
                width: 230,
                template: this.rowToolbar
            }];
        var model = {
            id: '',
            title: 'Business management',
            type: 'default',
            user: '测试1号',
            date: '2014年9月4日 7:28:47'
        };
        var datas = [], keys = Object.keys(model);
        var _loop_1 = function(i) {
            var obj = {};
            keys.forEach(function (item) {
                obj[item] = model[item];
            });
            obj['id'] = i;
            datas.push(obj);
        };
        for (var i = 1; i <= 35; i++) {
            _loop_1(i);
        }
        this.tableDatas = datas;
    };
    __decorate([
        core_1.ViewChild('rowToolbar'), 
        __metadata('design:type', Object)
    ], TableComponent.prototype, "rowToolbar", void 0);
    __decorate([
        core_1.ViewChild('rowName'), 
        __metadata('design:type', Object)
    ], TableComponent.prototype, "rowName", void 0);
    TableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-table',
            templateUrl: 'table.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
