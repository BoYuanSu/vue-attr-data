import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vGtm } from './index'
import { reactive, ref } from 'vue'

describe('gtm directive', () => {
  it('should add attribute number data', () => {
    const wrapper = mount({
      template: '<div v-gtm="data"></div>',
      directives: {
        gtm: vGtm,
      },
      setup () {
        const data = 123
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('gtm')).toBe('123')
  })

  it('should add attribute string data', () => {
    const wrapper = mount({
      template: '<div v-gtm="data"></div>',
      directives: {
        gtm: vGtm,
      },
      setup () {
        const data = '456'
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('gtm')).toBe('456')
  })

  it('should add attribute ref data', () => {
    const wrapper = mount({
      template: '<div v-gtm="data"></div>',
      directives: {
        gtm: vGtm,
      },
      setup () {
        const data = ref({ a: 'a', b: 'b' })
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('gtm-a')).toBe('a')
    expect(wrapper.element.getAttribute('gtm-b')).toBe('b')
  })

  it('should add attribute origin data', () => {
    const wrapper = mount({
      template: '<div v-gtm="data"></div>',
      directives: {
        gtm: vGtm,
      },
      setup () {
        const data = { c: 'c', d: 222 }
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('gtm-c')).toBe('c')
    expect(wrapper.element.getAttribute('gtm-d')).toBe('222')
  })

  it('should add attribute reactive data', () => {
    const wrapper = mount({
      template: '<div v-gtm="data"></div>',
      directives: {
        gtm: vGtm,
      },
      setup () {
        const data = reactive({ e: 'e', f: 333 })
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('gtm-e')).toBe('e')
    expect(wrapper.element.getAttribute('gtm-f')).toBe('333')
  })
})
