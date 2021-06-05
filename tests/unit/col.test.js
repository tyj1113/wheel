const expect = chai.expect;
import Vue from 'vue'
import Col from '../../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在', () => {
        expect(Col).to.exist
    })
    it('接收span属性', () => {
        const div = document.createElement(div)
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 sm 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                sm: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('sm-col-1')).to.eq(true)
        expect(element.classList.contains('sm-offset-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 md 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                md: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('md-col-1')).to.eq(true)
        expect(element.classList.contains('md-offset-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 lg 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                lg: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('lg-col-1')).to.eq(true)
        expect(element.classList.contains('lg-offset-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 xl 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                xl: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('xl-col-1')).to.eq(true)
        expect(element.classList.contains('xl-offset-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 xxl 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                xxl: {span: 1, offset: 2}
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('xxl-col-1')).to.eq(true)
        expect(element.classList.contains('xxl-offset-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})
