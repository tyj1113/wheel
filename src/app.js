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
import plugin from "./plugin";
import Tabs from './Tabs'
import TabsHead from './Tabs-head'
import TabsBody from './Tabs-body'
import TabsItem from './Tabs-item'
import TabsPane from './Tabs-pane'

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
Vue.use(plugin)
Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-pane', TabsPane)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'hi',
        selectedTab: 'sports'
    },
    methods: {
        showToast1(){
            this.$toast('message',{
                closeButton:{
                text:'X',
                    callback(){
                    console.log(111)
                    }
                },
                enableHtml:true,
                autoClose:false
            })
        },
        showToast2(){
            this.$toast('message',{
                closeButton:{
                    text:'XX',
                    callback(toast){
                        toast.test()
                    }
                },
                position:'middle'
            })
        },
        showToast3(){
            this.$toast('<strong>加粗</strong>',{
                closeButton:{
                    text:'XXX',
                    callback(toast){
                        toast.test()
                    }
                },
                enableHtml: true,
                position:'bottom'
            })
        }
    }
})
