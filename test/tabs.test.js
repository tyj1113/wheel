const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/Tabs'
import TabsHead from '../src/Tabs-head'
import TabsBody from '../src/Tabs-body'
import TabsItem from '../src/Tabs-item'
import TabsPane from '../src/Tabs-pane'

Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
     <t-tabs selected="live" >
        <t-tabs-head>
            <template slot="actions">
                <button>设置</button>
            </template>
            <t-tabs-item name="tv" >
                影视
            </t-tabs-item>
            <t-tabs-item name="live">
                生活
            </t-tabs-item>
            <t-tabs-item name="game" disabled>
                游戏
            </t-tabs-item>
        </t-tabs-head>
        <t-tabs-body>
            <t-tabs-pane name="tv">
                影视相关资讯
            </t-tabs-pane>
            <t-tabs-pane name="live">
                生活相关资讯
            </t-tabs-pane>
            <t-tabs-pane name="game">
                游戏相关资讯
            </t-tabs-pane>
        </t-tabs-body>
    </t-tabs>
    `
        let vm = new Vue({
            el: div,
        })
        vm.$nextTick(() => {
            let flag = vm.$el.querySelector(`.tabs-item[data-name="live"]`)
            expect(flag.classList.contains('active')).to.be.true
            done()
        })
    })
})