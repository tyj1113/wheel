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
import Popover from "./Popover";
import Collapse from "./Collapse";
import CollapseItem from "./Collapse-item";
import Cascader from "./Cascader";
import CascaderItem from "./Cascader-item"

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
Vue.component('t-popover', Popover)
Vue.component('t-collapse', Collapse)
Vue.component('t-collapse-item', CollapseItem)
Vue.component('t-cascader', Cascader)
Vue.component('t-cascader-item', CascaderItem)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message:'hi',
        selectedTab: 'game',
        selectedItems:['2'],
        source: [{
            name: '浙江',
            children: [
                {
                    name: '杭州',
                    children: [
                        {name: '上城'},
                        {name: '下城'},
                        {name: '江干'},
                    ]
                },
                {
                    name: '嘉兴',
                    children: [
                        {name: '南湖'},
                        {name: '秀洲'},
                        {name: '嘉善'},
                    ]
                },
            ]
        }, {
            name: '福建',
            children: [
                {
                    name: '福州',
                    children: [
                        {name: '鼓楼'},
                        {name: '台江'},
                        {name: '仓山'},
                    ]
                },
            ]
        }, {
            name: '安徽',
            children: [{
                name: '合肥',
                children: [{
                    name: '瑶海'
                }, {
                    name: '庐阳'
                }]
            }]
        }]
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
        },
        fatherClick(){
            console.log('父容器')
        }
    }
})
