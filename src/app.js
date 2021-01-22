import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import Buttongroup from './Button-group.vue'
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";
import Container from "./Container";
import Aside from "./Aside";
import Footer from "./Footer";
import Main from "./Main";
import Header from "./Header";


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


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'hi',
    }
})
