import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vAttrData, useAttrData } from './index'
import { reactive, ref } from 'vue'

// const vAttrData = useAttrData({ prefix:'data'})
describe('gtm directive', () => {
  it('should add attribute number data', () => {
    const wrapper = mount({
      template: '<div v-data="data"></div>',
      directives: {
        data: vAttrData,
      },
      setup () {
        const data = 123
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('data')).toBe('123')
  })

  it('should add attribute string data', () => {
    const wrapper = mount({
      template: '<div v-attr-data="data"></div>',
      directives: {
        attrData: vAttrData,
      },
      setup () {
        const data = '456'
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('data')).toBe('456')
  })

  it('should add attribute ref data', () => {
    const wrapper = mount({
      template: '<div v-attr-data="data"></div>',
      directives: {
        attrData: vAttrData,
      },
      setup () {
        const data = ref({ a: 'a', b: 'b' })
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('data-a')).toBe('a')
    expect(wrapper.element.getAttribute('data-b')).toBe('b')
  })

  it('should add attribute origin data', () => {
    const wrapper = mount({
      template: '<div v-attr-data="data"></div>',
      directives: {
        attrData: vAttrData,
      },
      setup () {
        const data = { c: 'c', d: 222 }
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('data-c')).toBe('c')
    expect(wrapper.element.getAttribute('data-d')).toBe('222')
  })

  it('should add attribute reactive data', () => {
    const wrapper = mount({
      template: '<div v-attr-data="data"></div>',
      directives: {
        attrData: vAttrData,
      },
      setup () {
        const data = reactive({ e: 'e', f: 333 })
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('data-e')).toBe('e')
    expect(wrapper.element.getAttribute('data-f')).toBe('333')
  })

  it('should add attribute reactive data', () => {
    const wrapper = mount({
      template: '<div v-data:cy="data"></div>',
      directives: {
        data: vAttrData,
      },
      setup () {
        const data = reactive({ e: 'e', f: 333 })
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('cy-e')).toBe('e')
    expect(wrapper.element.getAttribute('cy-f')).toBe('333')
  })

  it('should add attribute reactive data', () => {
    const wrapper = mount({
      template: '<div v-data:cy="data"></div>',
      directives: {
        data: vAttrData,
      },
      setup () {
        const data = { e: ref('e'), f: 333 }
        return { data }
      },
    })
    expect(wrapper.element.getAttribute('cy-e')).toBe('e')
    expect(wrapper.element.getAttribute('cy-f')).toBe('333')

    const wrapper2 = mount({
      template: '<div v-data:cy="data.e"></div>',
      directives: {
        data: vAttrData,
      },
      setup () {
        const data = reactive({ e: ref('e'), f: 333 })
        return { data }
      },
    })
    expect(wrapper2.element.getAttribute('cy')).toBe('e')
  })

  it('should create new directive function', ()=>{
    const wrapper = mount({
      template: '<div v-data="data"></div>',
      directives: {
        data: useAttrData({ prefix:'cy'})
      },
      setup () {
        const data = { productName: 'e'}

        return { data }
      },
    })
    expect(wrapper.element.getAttribute('cy-productname')).toBe('e')

  })

  it('should disable', ()=>{
    const wrapper = mount({
      template: '<div v-data="data"></div>',
      directives: {
        data: useAttrData({enable:false})
      },
      setup () {
        const data = { e: 'e'}

        return { data }
      },
    })
    expect(wrapper.element.getAttribute('data-e')).toBe(null)
  })

  it('should disable', ()=>{
    const wrapper = mount({
      template: '<div v-gtm="gtmData" v-cy="testData"></div>',
      directives: {
        cy: useAttrData({ prefix:'cy'}),
        gtm: useAttrData({ prefix: 'gtm'}),
      },
      setup () {
        const gtmData = { name: 'name'}
        const testData = { btn: 'btn-confirm'}

        return { gtmData, testData }
      },
    })
    expect(wrapper.element.getAttribute('gtm-name')).toBe('name')
    expect(wrapper.element.getAttribute('cy-btn')).toBe('btn-confirm')
  })
})
