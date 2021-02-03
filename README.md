# tom-ui - 一个Vue UI 组件库

[![Build Status](https://travis-ci.org/tyj1113/wheel.svg?branch=master)](https://travis-ci.org/tyj1113/wheel)

## 介绍

这是我在学习Vue的过程中造的轮子,一个基于Vue的UI组件库,目前包含Button, Input, Grid, Layout, Toast, Tabs, Popover, Collapse组件。项目仍在开发中,不定期更新。

## 安装

$ npm install tomtangwheel
<br />或<br />
$ yarn add tomtangwheel
## 使用

一般在入口文件 main.js 中如下配置：<br />
1.按需引入Button与Input组件,减小项目体积
```javascript
import Vue from 'vue'
import 'tomtangwheel/dist/index.css'//引入组件样式
import { Button, Input} from 'tomtangwheel'
Vue.component('t-button',Button)
Vue.component('t-input',Input)
```
2.完整引入
```javascript
import Vue from 'vue'
import 'tomtangwheel/dist/index.css'//引入组件样式
import {
    Button, 
    ButtonGroup, 
    Icon,
    Input,
    Row,
    Col,
    Container,
    Aside,
    Header,
    Main,
    Footer,
    plugin,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover,
    Collapse
    ,CollapseItem
} from 'tomtangwheel'   
Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-button-group',Buttongroup)
Vue.component('t-input',Input)
Vue.component('t-row',Row)
Vue.component('t-col',Col)
Vue.component('t-container',Container)
Vue.component('t-aside',Aside)
Vue.component('t-header',Header)
Vue.component('t-footer',Footer)
Vue.component('t-main',Main)
Vue.use(plugin)  //toast组件使用
Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-pane', TabsPane)
Vue.component('t-popover', Popover)
Vue.component('t-collapse', Collapse)
Vue.component('t-collapse-item', CollapseItem)
```
注意不管是完整引入,还是引入部分组件都需要引入样式

## 文档
https://tyj1113.github.io/wheel/

## 提醒

添加 CSS 样式 使用本框架前，请在 CSS 中开启 border-box

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

IE 8 及以上浏览器都支持此样式。




