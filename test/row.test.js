const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row',()=>{

    it('存在',()=>{
        expect(Row).to.exist
    })
    it('接受gutter属性',()=>{
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div=document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
      <g-row gutter="20">
        <g-col span="12"></g-col>
        <g-col span="12"></g-col>
      </g-row>
    `
        const vm=new Vue({
            el:div
        })
setTimeout(()=>{
    const row=vm.$el.querySelector('.row')
    expect(getComputedStyle(row).marginLeft.to.eq('-10px'))
    expect(getComputedStyle(row).marginRight.to.eq('-10px'))
    const cols=vm.$el.querySelectorAll('.col')
    expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
    expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
    done()
},0)
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收align属性',()=>{
        const div=document.createElement('div')
        document.body.appendChild(div)
        const constructor=Vue.extend(Row)
        const vm=new constructor({
            propsData:{
                align:'center'
            }
        }).$mount(div)
        const row=vm.$el
        expect(getComputedStyle(row).justifyContent).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })
})