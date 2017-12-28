import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
    selector: 'province-list',
    templateUrl: 'province-list.html'
})
export class ProvinceListPage implements OnInit {
    //省份列表
    provinceList: any[] = [];
    //搜索的数据
    filterData: any[] = [];
    //保存是否在搜索状态
    isSearch:Boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {

    }

    ngOnInit() {
        this.http.get('assets/json/china.json').toPromise().then(res => {
            this.provinceList = res.json().features;
        })
    }

    //获取搜索的数据
    getItems(e: any) {
        let keyword = e.target.value;
        if(keyword){
            this.isSearch = true;
            this.filterData = this.provinceList.filter(item => item.properties.name.indexOf(keyword) != -1);
        }
        else
            this.isSearch = false;
    }
}
