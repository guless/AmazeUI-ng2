import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {

    tableColumn = [{
        name: 'id',
        title: 'ID',
        width: 50
    }, {
        name: 'title',
        title: '标题',
        formatter: function (cellvalue, col, row) {
            return '<a href="javascript:void">' + cellvalue + '</a>';
        }
    }, {
        name: 'type',
        title: '类别',
        width: 70
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
        formatter: function (cellvalue, col, row) {
            return `<div class="am-btn-toolbar">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span class="am-icon-pencil-square-o"></span> 编辑</button>
                                        <button class="am-btn am-btn-default am-btn-xs am-hide-sm-only"><span class="am-icon-copy"></span> 复制</button>
                                        <button class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only"><span class="am-icon-trash-o"></span> 删除</button>
                                    </div>
                                </div>`;
        }
    }];

    tableDatas = [];

    constructor() {
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

    ngOnInit() { }

}