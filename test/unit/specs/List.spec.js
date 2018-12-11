import List from '@/components/list/List'
import ListItem from '@/components/list/ListItem'
import { mount } from '@vue/test-utils'

const list = () => mount(List)
const listItem = () => mount(ListItem)

describe('List', () => {
  describe('List.vue', () => {
    it('should be semantic', () => {
      const wrapper = list()
      expect(wrapper.is('ul')).to.equal(true)
    })
  })

  describe('ListItem.vue', () => {
    it('should be semantic', () => {
      const wrapper = listItem()
      expect(wrapper.is('li')).to.equal(true)
    })
  })
})
