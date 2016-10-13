import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {

    @ViewChild('rowToolbar') rowToolbar: any;
    @ViewChild('rowName') rowName: any;

    tableColumn = [];

    tableDatas = [];

    constructor() {

    }

    print(cell:any){
        console.log(cell);
    }

    del(row:any){
        this.tableDatas = this.tableDatas.filter(item=>item !=row)
    }

    ngOnInit() {
        this.tableColumn = [{
            name: 'id',
            title: 'ID',
            width: 50
        }, {
            name: 'title',
            title: '标题',
            template:this.rowName
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

        let model = {
            id: '',
            title: 'Business management',
            type: 'default',
            user: '测试1号',
            date: '2014年9月4日 7:28:47'
        };
        let datas = [], keys = Object.keys(model);
        for (let i = 1; i <= 35; i++) {
            let obj = {};
            keys.forEach((item) => {
                obj[item] = model[item];
            });
            obj['id'] = i;
            datas.push(obj);
        }
        this.tableDatas = datas;
    }

}