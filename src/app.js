import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import Buttongroup from './Button-group.vue'
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect=chai.expect

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
try{
    {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'edit'
            }
        })
        // vm.$mount('#text')
        vm.$mount()//可以不传节点 让它在内存里也能测试
        let useElement=vm.$el.querySelector('use')
        let href=useElement.getAttribute('xlink:href')
        expect(href).to.eq('#iconedit')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'edit',
                loading:true
            }
        })
        vm.$mount()
        let useElement=vm.$el.querySelector('use')
        let href=useElement.getAttribute('xlink:href')
        expect(href).to.eq('#iconxingzhuang')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div=document.createElement('div')
        document.body.appendChild(div)
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'edit',
                loading:true
            }
        })
        vm.$mount(div)
        let svg=vm.$el.querySelector('svg')
        let {order}=window.getComputedStyle(svg)//获取该元素的样式 结构出order属性
        expect(order).to.eq('0')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div=document.createElement('div')
        document.body.appendChild(div)//测试样式属性需要渲染出真实dom 所以创建了div
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({
            propsData:{
                icon:'edit',
                loading:true,
                iconPosition:'right'
            }
        })
        vm.$mount(div)
        let svg=vm.$el.querySelector('svg')
        let {order}=window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        //mock
        const Constructor=Vue.extend(Button)
        const vm=new Constructor({})
        vm.$mount()
        let spy=chai.spy(function () {})
        vm.$on('click',spy)
        let button=vm.$el
        button.click()
        expect(spy).to.have.been.called()//希望这个函数被处罚
    }
}catch(error){
    window.errors=error

}finally {
    window.errors && console.error(window.errors.message)
}

