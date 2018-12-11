import Vue from 'vue'
import SkipToContent from '@/components/SkipToContent'
import { mount } from '@vue/test-utils'

const factory = () => mount(SkipToContent, {
  propsData: {
    href: '#content'
  }
})

describe('SkipToContent.vue', () => {
  describe('Unfocussed state', () => {
    const wrapper = factory()
    it('should be hidden', () => {
      expect(wrapper.classes('skip-to-content--focussed')).to.equal(false)
    })
  })

  describe('Focussed state', () => {
    const wrapper = factory()
    it('should be visible when focussed', done => {
      wrapper.trigger('focus')

      Vue.nextTick(() => {
        expect(wrapper.classes('skip-to-content--focussed')).to.equal(true)
        done()
      })
    })
  })
})
