import { Component, OnInit, OnDestroy } from '@angular/core';

import { RestService } from '../shared/rest.service';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit, OnDestroy {
	 newPage = 2300;
	 order = 308;
	 visit = 80082;
	 online = 1300;

	 table:any[] = [];

	 progress = 0;

	 browsers:any[] = [];

	 disposed = false;

	constructor(private rest: RestService) { }

	increase() {
		if (this.disposed) return;
		this.newPage += parseInt((3 + Math.random() * 300) + '', 10);
		this.order += parseInt((1 + Math.random() * 100) + '', 10);
		this.visit += parseInt((10 + Math.random() * 1000) + '', 10);
		this.online += parseInt((2 + Math.random() * 100) + '', 10);
		setTimeout(() => this.increase(),
			parseInt((10 + Math.random() * 1000) + '', 10));
	}

	increaseProgress(){
		if (this.disposed) return;
		this.progress += parseInt((1 + Math.random() * 10) + '', 10);
		this.progress %= 100;
		setTimeout(() => this.increaseProgress(),
			parseInt((10 + Math.random() * 1000) + '', 10));
		
	}

	increaseBrowse() {
		if (this.disposed) return;
		this.browsers && this.browsers.forEach((item) => {
			item.count += parseInt((3 + Math.random() * 30) + '', 10);
		});
		setTimeout(() => this.increaseBrowse(),
			parseInt((10 + Math.random() * 1000) + '', 10));
	}

	deleteTableItem(item:any){
		let index = this.table.indexOf(item);
		if (index >= 0)
			this.table.splice(index, 1);
	}

	ngOnInit() {
		this.increase();
		this.increaseProgress();

		this.rest.getJson('list.json')
			.subscribe(rs => this.table = rs.json() as any[]);

		this.rest.getJson('browser.json')
			.subscribe(rs => { this.browsers = rs.json() as any[]; this.increaseBrowse(); });
	}

	ngOnDestroy() {
		this.disposed = true;
	}
}