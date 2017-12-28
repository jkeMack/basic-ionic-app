import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';

declare var BMap;
declare var BMAP_ANCHOR_TOP_LEFT;
declare var BMAP_NAVIGATION_CONTROL_LARGE;

@Component({
    selector: 'baidu-map',
    templateUrl: 'baidu-map.html'
})
export class BaiduMapPage {

    @ViewChild('map') mapElement: ElementRef;

    constructor(public navCtrl: NavController) {

    }

    //使用ionViewWillEnter每次进入该页面都会重绘地图
    ionViewWillEnter() {


        let map = new BMap.Map(this.mapElement.nativeElement, {enableMapClick: true});//创建地图实例

        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function (r) {

            let currentPoint = new BMap.Point(r.point.lng, r.point.lat);//用所定位的经纬度查找所在地省市街道等信息
            map.centerAndZoom(currentPoint, 15);
            // 标出当前位置
            let currentMarker = new BMap.Marker(currentPoint);
            map.addOverlay(currentMarker)

            // 添加带有定位的导航控件
            let navigationControl = new BMap.NavigationControl({
                // 靠左上角位置
                anchor: BMAP_ANCHOR_TOP_LEFT,
                // LARGE类型
                type: BMAP_NAVIGATION_CONTROL_LARGE,
                // 启用显示定位
                enableGeolocation: true
            });
            map.addControl(navigationControl);

        }, {enableHighAccuracy: true});

        /*更多应用请查阅百度api使用（http://lbsyun.baidu.com/index.php?title=jspopular）*/
    }
}
