# tom-ui - 一个Vue UI 组件

[![Build Status](https://travis-ci.org/tyj1113/wheel.svg?branch=master)](https://travis-ci.org/tyj1113/wheel)

## 介绍

这是我在学习Vue的过程中做的一个UI框架,希望对你有用

## 开始使用

1.添加 CSS 样式 使用本框架前，请在 CSS 中开启 border-box

*,*::before,*::after{box-sizing: border-box;}

IE 8 及以上浏览器都支持此样式。

2.安装

$ npm install tomtangwheel

$ yarn add tomtangwheel

3.引入 

以Button组件为例,入口文件 添加以下代码

import 'tomtangwheel/dist/index.css'
import{Button} from tomtangwheel
Vue.component('t-button',Button)

## 文档
https://tyj1113.github.io/wheel/component/button.html

## 提问
## 变更记录
## 联系方式
## 贡献代码
