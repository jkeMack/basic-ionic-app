import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {BaiduMapPage} from '../pages/baidu-map/baidu-map';
import {IconPage} from '../pages/icon/icon';
import {ProvinceListPage} from '../pages/province-list/province-list';

import {NgxEChartsModule} from '../ngx-echarts/echarts.module';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from "@ionic-native/keyboard";
import {HttpModule} from '@angular/http';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        BaiduMapPage,
        IconPage,
        ProvinceListPage
    ],
    imports: [
        BrowserModule,
        NgxEChartsModule,
        HttpModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        BaiduMapPage,
        IconPage,
        ProvinceListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Keyboard,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
