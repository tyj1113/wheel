const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../../src/Collapse'
import CollapseItem from '../../src/Collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {

    it('存在.', () => {
        expect(Collapse).to.exist
    })

    it('接受 selected 属性', (done) => {

        Vue.component('t-collapse', Collapse)
        Vue.component('t-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-collapse :selected="xxx">
          <t-collapse-item title="标题1" name="1"><span id="content-1">1</span></t-collapse-item>
          <t-collapse-item title="标题2" name="2"><span id="content-2">2</span></t-collapse-item>
          <t-collapse-item title="标题3" name="3"><span id="content-3">3</span></t-collapse-item>
        </t-collapse>
    `
        const vm = new Vue({
            el: div,
            data: {
                xxx: ['1', '2']
            }
        })
        setTimeout(() => {
            expect(vm.$el.querySelector('#content-1')).to.exist
            expect(vm.$el.querySelector('#content-2')).to.exist
            expect(vm.$el.querySelector('#content-3')).to.not.exist
            done()
        })
    })

    it('接受 single 属性', (done) => {

        Vue.component('t-collapse', Collapse)
        Vue.component('t-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-collapse :selected.sync="xxx" single>
          <t-collapse-item title="标题1" name="1"><span id="content-1">1</span></t-collapse-item>
          <t-collapse-item title="标题2" name="2"><span id="content-2">2</span></t-collapse-item>
          <t-collapse-item title="标题3" name="3"><span id="content-3">3</span></t-collapse-item>
        </t-collapse>
    `
        const vm = new Vue({
            el: div,
            data: {
                xxx: ['1']
            }
        })
        setTimeout(() => {
            vm.$el.querySelector('[data-name="2"]').click()
            setTimeout(() => {
                expect(vm.$el.querySelector('#content-1')).to.not.exist
                expect(vm.$el.querySelector('#content-2')).to.exist
                done()
            })
        })
    })

    it('触发 update:selected 事件', (done) => {
        Vue.component('t-collapse', Collapse)
        Vue.component('t-collapse-item', CollapseItem)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-collapse :selected="xxx" @update:selected="onSelect">
          <t-collapse-item title="标题1" name="1"><span id="content-1">1</span></t-collapse-item>
          <t-collapse-item title="标题2" name="2"><span id="content-2">2</span></t-collapse-item>
          <t-collapse-item title="标题3" name="3"><span id="content-3">3</span></t-collapse-item>
        </t-collapse>
    `
        const callback = sinon.fake();
        const vm = new Vue({
            el: div,
            data: {
                xxx: ['1']
            },
            methods: {
                onSelect: callback
            }
        })
        setTimeout(() => {
            vm.$el.querySelector('[data-name="2"]').click()
            setTimeout(() => {
                expect(callback).to.have.been.called
                done()
            })
        })
    })
})
