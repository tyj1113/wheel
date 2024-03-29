const expect = chai.expect;
import Vue from 'vue'
import Popover from '../../src/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

    it('存在.', () => {
        expect(Popover).to.exist
    })

    it('可以设置position.', (done) => {
        Vue.component('t-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
    <t-popover position="bottom" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </t-popover>
    `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
    })
    it('可以设置 trigger', (done) => {
        Vue.component('t-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
    <t-popover trigger="hover" ref="a">
      <template slot="content">
      弹出内容
      </template>
      <button>点我</button>
    </t-popover>
    `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            let event = new Event('mouseenter');
            vm.$refs.a.$el.dispatchEvent(event)
            vm.$nextTick(() => {
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper).to.exist
                done()
            })
        }, 200)

    })

})
