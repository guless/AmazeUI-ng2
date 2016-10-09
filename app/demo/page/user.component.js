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
var UserComponent = (function () {
    function UserComponent() {
        this.model = {
            name: '',
            email: '',
            phone: '',
            QQ: '',
            weibo: '',
            intro: ''
        };
        this.saveData = '';
        this.submitted = false;
        this.progress1 = 0;
        this.progress2 = 0;
        this.disposed = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.increaseProgress();
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.disposed = true;
    };
    UserComponent.prototype.increaseProgress = function () {
        var _this = this;
        if (this.disposed)
            return;
        this.progress1 += parseInt((1 + Math.random() * 10) + '', 10);
        this.progress1 %= 100;
        this.progress2 += parseInt((1 + Math.random() * 10) + '', 10);
        this.progress2 %= 100;
        setTimeout(function () { return _this.increaseProgress(); }, parseInt((10 + Math.random() * 1000) + '', 10));
    };
    UserComponent.prototype.onSubmit = function (form) {
        console.log(form);
        this.submitted = true;
        this.saveData = JSON.stringify(this.model);
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-user',
            templateUrl: 'user.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
