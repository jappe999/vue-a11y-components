import Vue from 'vue'
import SkipToContent from '@/components/SkipToContent'
import { mount } from '@vue/test-utils'

describe('SkipToContent.vue', () => {
  const wrapper = mount(SkipToContent, {
    propsData: {
      href: '#content'
    }
  })

  it('should be hidden', () => {
    expect(wrapper.classes('skip-to-content--focussed')).to.equal(false)
  })

  it('should be visible when focussed', done => {
    wrapper.trigger('focus')

    Vue.nextTick(() => {
      expect(wrapper.classes('skip-to-content--focussed')).to.equal(true)
      done()
    })
  })
})
