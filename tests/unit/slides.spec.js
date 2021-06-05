import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Slides from '@/Slides.vue'
import SlidesItem from '@/SlidesItem.vue'
import Vue from 'vue'

chai.use(sinonChai)

describe('Slides.vue', () => {
    it('存在.', () => {
        expect(Slides).to.exist
    })

    it('接受 TSlidesItem，默认展示第一个', (done) => {
        Vue.component('TSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false
            },
            slots: {
                default: `
          <TSlidesItem name="1">
            <div class="box1">1</div>
          </TSlidesItem>
          <TSlidesItem name="2">
            <div class="box2">2</div>
          </TSlidesItem>
          <TSlidesItem name="3">
            <div class="box3">3</div>
          </TSlidesItem>
        `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        })
    })
    it('selected 是几，选中的就是几', (done) => {
        Vue.component('TSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
                selected: '2'
            },
            slots: {
                default: `
          <TSlidesItem name="1">
            <div class="box1">1</div>
          </TSlidesItem>
          <TSlidesItem name="2">
            <div class="box2">2</div>
          </TSlidesItem>
          <TSlidesItem name="3">
            <div class="box3">3</div>
          </TSlidesItem>
        `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').exists()).to.be.true
            done()
        })
    })

    it('点击第二个就展示第二个', (done) => {
        Vue.component('TSlidesItem', SlidesItem)
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: false,
                selected: '1'
            },
            slots: {
                default: `
          <TSlidesItem name="1">
            <div class="box1">1</div>
          </TSlidesItem>
          <TSlidesItem name="2">
            <div class="box2">2</div>
          </TSlidesItem>
          <TSlidesItem name="3">
            <div class="box3">3</div>
          </TSlidesItem>
        `
            },
            listeners: {
                'update:selected': (x) => {
                    expect(x).to.eq('2')
                    done()
                }
            }
        })
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click')
        })
    })

    it('会自动播放', (done) => {
        Vue.component('TSlidesItem', SlidesItem)
        const callback = sinon.fake();
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 20,
                selected: '1'
            },
            slots: {
                default: `
          <TSlidesItem name="1">
            <div class="box1">1</div>
          </TSlidesItem>
          <TSlidesItem name="2">
            <div class="box2">2</div>
          </TSlidesItem>
          <TSlidesItem name="3">
            <div class="box3">3</div>
          </TSlidesItem>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            expect(callback).to.have.been.calledWith('2')
            done()
        }, 21)
    })
    it('可以点击上一张', (done) => {
        Vue.component('TSlidesItem', SlidesItem)
        const callback = sinon.fake();
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 20,
                selected: '1'
            },
            slots: {
                default: `
          <TSlidesItem name="1">
            <div class="box1">1</div>
          </TSlidesItem>
          <TSlidesItem name="2">
            <div class="box2">2</div>
          </TSlidesItem>
          <TSlidesItem name="3">
            <div class="box3">3</div>
          </TSlidesItem>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-action="prev"]').trigger('click')
            expect(callback).to.have.been.calledWith('3')
            done()
        }, 21)
    })
    it('可以点击下一张', (done) => {
        Vue.component('TSlidesItem', SlidesItem)
        const callback = sinon.fake();
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 20,
                selected: '1'
            },
            slots: {
                default: `
          <TSlidesItem name="1">
            <div class="box1">1</div>
          </TSlidesItem>
          <TSlidesItem name="2">
            <div class="box2">2</div>
          </TSlidesItem>
          <TSlidesItem name="3">
            <div class="box3">3</div>
          </TSlidesItem>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-action="next"]').trigger('click')
            expect(callback).to.have.been.calledWith('2')
            done()
        }, 21)
    })
})
