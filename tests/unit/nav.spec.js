import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Nav from '../../src/Nav'
import NavItem from '../../src/NavItem'
import SubNav from '../../src/SubNav'
import Vue from 'vue'

chai.use(sinonChai)

describe('Nav.vue', () => {
    it('存在.', () => {
        expect(Nav).to.exist
    })
    it('支持 selected 属性', (done) => {
        Vue.component('t-nav-item', NavItem)
        Vue.component('t-sub-nav', SubNav)
        const wrapper = mount(Nav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
          <t-nav-item name="home">首页</t-nav-item>
          <t-sub-nav name="about">
            <template slot="title">关于</template>
            <t-nav-item name="culture">企业文化</t-nav-item>
          </t-sub-nav>
        `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
            done()
        })
    })

    it('会触发 update:selected 事件', (done) => {
        Vue.component('t-nav-item', NavItem)
        Vue.component('t-sub-nav', SubNav)
        const callback = sinon.fake();
        const wrapper = mount(Nav, {
            propsData: {
                selected: 'home'
            },
            slots: {
                default: `
          <t-nav-item name="home">首页</t-nav-item>
          <t-sub-nav name="about">
            <template slot="title">关于</template>
            <t-nav-item name="culture">企业文化</t-nav-item>
            <t-nav-item name="developers">开发团队</t-nav-item>
          </t-sub-nav>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })
        wrapper.find('[data-name="developers"]').trigger('click')
        expect(callback).to.have.been.calledWith('developers')
        done()
    })
})
