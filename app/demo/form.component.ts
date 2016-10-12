import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'form.component.html'
})
export class FormComponent implements OnInit {

    selectDatas = [{id:1, text:'正常'},{id:2, text:'待审核'},{id:3, text:'不显示'}];

    selectCurrent:any = this.selectDatas[1];
    
    constructor() { }

    ngOnInit() { }

    selectChange(item:any){
        this.selectCurrent = item;
    }

    test1 = 'option2';

    selectDatasM = [{id:1, text:'允许评论'},{id:2, text:'置顶'},{id:3, text:'推荐'},{id:4, text:'热门'},{id:5, text:'轮播图'}];

    selectCurrentM = this.selectDatasM.slice(1,3);
    selectChangeM(items:any){
        //console.log('aaaa');
        this.selectCurrentM = items;
    }

    saveData = '';
    save(){
        let saveData = {
            select1:this.selectCurrent?this.selectCurrent.id:'',
            select2:this.selectCurrentM.map((item)=>item.id)
        }
        this.saveData = JSON.stringify(saveData);
    }
}