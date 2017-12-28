import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    //保存图表配置
    private option1 = {};

    constructor(public navCtrl: NavController) {

    }

    //使用ionViewWillEnter每次进入该页面都会重绘地图
    ionViewWillEnter() {
        this.option1 = {
            title: {
                text: '区域github贡献统计',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                x: 'left',
                y: 'center',
                orient: 'vertical',
                data: ['四川省', '浙江省', '上海市', '北京市', '江苏省']
            },
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [30, 60],
                    center: ['60%', '50%'],
                    data: [
                        {value: 80, name: '四川省'},
                        {value: 100, name: '浙江省'},
                        {value: 60, name: '上海市'},
                        {value: 40, name: '北京市'},
                        {value: 110, name: '江苏省'}
                    ]
                }
            ]
        };
    }
}
