import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from "@ionic-native/keyboard";

import {HomePage} from '../pages/home/home';
import {IconPage} from '../pages/icon/icon';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private keyboard: Keyboard) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: '首页', component: HomePage},
            {title: '自定义图标', component: IconPage}
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            // 禁止软键盘将页面布局影响
            this.keyboard.disableScroll(true);

            //注册返回按键事件
            this.platform.registerBackButtonAction((): any => {

                //获取当前展示的页面数据
                let activeVC = this.nav.getActive();

                //判断当前展示的页面若为首页则触发返回就退出app
                if (activeVC.component.name == 'HomeComponent') {
                    this.platform.exitApp();
                }
            }, 101);
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
