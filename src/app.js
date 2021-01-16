import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import Buttongroup from './Button-group.vue'

Vue.component('t-button',Button)
Vue.component('t-icon',Icon)
Vue.component('t-button-group',Buttongroup)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
    }
})