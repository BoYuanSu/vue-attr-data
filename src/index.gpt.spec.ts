import { mount } from '@vue/test-utils'
import { vGtm } from './index'
import { describe, it, expect } from 'vitest'

describe('vGtm directive', () => {
  it('sets the gtm attribute to the correct value when passed a string value', () => {
    // Create a mock Vue instance and render a template that uses the vGtm directive
    const vm = mount({
      template: '<div v-gtm="stringValue"></div>',
      directives: {
        gtm: vGtm
      }
    }).$mount()

    // Set the value of the vGtm directive binding
    vm.$set(vm, 'stringValue', 'some-string')

    // Check that the gtm attribute has the correct value
    expect(vm.$el.getAttribute('gtm')).to.equal('some-string')
  })

  it('sets the gtm attribute to the correct value when passed a number value', () => {
    const vm = mount({
      template: '<div v-gtm="numberValue"></div>',
      directives: {
        gtm: vGtm
      }
    }).$mount()

    vm.$set(vm, 'numberValue', 123)
    expect(vm.$el.getAttribute('gtm')).to.equal('123')
  })

  it('sets the gtm-* attributes to the correct values when passed an object value', () => {
    const vm = mount({
      template: '<div v-gtm="objectValue"></div>',
      directives: {
        gtm: vGtm
      }
    }).$mount()

    vm.$set(vm, 'objectValue', {
      foo: 'foo-value',
      bar: 'bar-value'
    })
    expect(vm.$el.getAttribute('gtm-foo')).to.equal('foo-value')
    expect(vm.$el.getAttribute('gtm-bar')).to.equal('bar-value')
  })
})
