# basic-ionic-app
   实际工作中做了很多ionicApp的项目，搭建这个基础app项目，集成了一些项目常用的解决方案，包括自定义图标的定义、百度地图引用使用、echart的封装使用

## 一、首页echart展示
   在app中封装了echart的指令，实际使用中只需写好配置项option，使用`<div [ngx-echarts]="option1" style="width: 100%;height:300px;"></div>`的
   写法就能正常使用了。
## 二、注册返回按键
   在实际开发中，某些页面的返回按键需要定制需求。页面上的返回按键可以自定义重写，但是如安卓手机的实体返回键，就需要在代码中自定义限制了。
   我在app.component中注册了首页触发返回直接退出app。

## 三、防止软件盘弹出影响页面布局
   在app.component中，书写`this.keyboard.disableScroll(true);` ,避免实际项目中，软件盘弹出将页头顶上去隐藏诸如此类的问题
## 四、引用百度地图api进行百度地图的定制化开发
   首先需要在index.html文件中引用百度地图的api，需要申请密钥。例如：`<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=HbUVYMUg6PwbOnXkztdgSQlQ"></script>`。
   实际的使用请看我应用中的代码。