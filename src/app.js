import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import Buttongroup from './Button-group.vue'
import Input from "./Input";
import Row from "./Row";
import Col from "./Col";


Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-button-group',Buttongroup)
Vue.component('t-input',Input)
Vue.component('t-row',Row)
Vue.component('t-col',Col)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'hi',
    }
})
