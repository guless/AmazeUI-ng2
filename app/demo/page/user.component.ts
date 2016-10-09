import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-user',
    templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit,OnDestroy {
    private model = {
        name: '',
        email: '',
        phone: '',
        QQ: '',
        weibo: '',
        intro: ''
    };

    private saveData = '';
    private submitted = false;

    private progress1 = 0;
    private progress2 = 0;

	private disposed = false;

    constructor() { }

    ngOnInit() {
        this.increaseProgress();
     }

     ngOnDestroy(){
         this.disposed = true;
     }

	increaseProgress(){
        if (this.disposed)return;
		this.progress1 += parseInt((1 + Math.random() * 10) + '', 10);
		this.progress1 %= 100;
		this.progress2 += parseInt((1 + Math.random() * 10) + '', 10);
		this.progress2 %= 100;
		setTimeout(() => this.increaseProgress(),
			parseInt((10 + Math.random() * 1000) + '', 10));
		
	}

    onSubmit(form:any) {
        console.log(form);
        this.submitted = true;
        this.saveData = JSON.stringify(this.model);
    }
}