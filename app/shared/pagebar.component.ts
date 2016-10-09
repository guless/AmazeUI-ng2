import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pagebar',
    templateUrl: 'pagebar.component.html'
})
export class PagebarComponent implements OnInit {
    private _datas = [];
    @Input()
    set datas(datas:any[]) {
        this._datas = datas || [];
        this.total = this.datas && this.datas.length || 0
        this.calcTotalPage();
        if (this.curPage != 1)
            this.curPage = 1;
        else
            this.takeDatas(1);
    }
    get datas(){return this._datas; }

    private _pageSize = 10;
    @Input()
    set pageSize(size){
        this._pageSize = size;
                	this.calcTotalPage();
        	if (this.curPage != 1)
        		this.curPage = 1;
        	else
        		this.takeDatas(1);

    }
    get pageSize(){return this._pageSize;}

    private _curPage = 1;
    @Input()
    set curPage(page){
        this._curPage = page;
        this.takeDatas(page);;
    }
    get curPage(){ return this._curPage; }

    private _totalPage = 0;
    @Input()
    set totalPage(tPage){
        this._totalPage = tPage;
        var total = tPage, list = [];
        for (var i = 1; i <= total; i++) list.push(i);
        this.pages = list;
    }
    get totalPage(){ return this._totalPage; }



    curDatas = [];
    total = 0;
    type = 0;
    pages = [];

    setPage(page) {
        this.curPage = page <= 0 ? 1 : (page > this.totalPage ? this.totalPage : page);
    };

    change = new EventEmitter<any>();

    takeList(list:any[], size:number, cur:number) {
        if (!list) return list;
        let index = size * (cur - 1);
        return list.slice(index, index + size);
    }

    takeDatas(cur) {
        let curDatas = this.curDatas = this.takeList(this.datas, this.pageSize, cur);
        this.change.emit(curDatas);
    }

    calcTotalPage() {
        let length = this.datas ? this.datas.length : 0,
            isAdd = (length % this.pageSize) != 0;
        this.totalPage = parseInt((length / this.pageSize).toString()) + (isAdd ? 1 : 0);

    }

    ngOnInit() { }
}