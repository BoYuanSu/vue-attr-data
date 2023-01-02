import { mount } from '@vue/test-utils'
import { vGtm } from './index'
import { describe, it, expect } from 'vitest'

describe('vGtm directive', () => {
  it('sets the gtm attribute to the correct value when passed a string value', async () => {
    // Create a mock Vue instance and render a template that uses the vGtm directive
    const vm = mount({
      template: '<div v-gtm="stringValue"></div>',
      directives: {
        gtm: vGtm
      },
      data:()=>({stringValue:''})
    })

    // Set the value of the vGtm directive binding
    await vm.setData({'stringValue':'some-string'})

    // Check that the gtm attribute has the correct value
    expect(vm.element.getAttribute('gtm')).to.equal('some-string')
  })

  it('sets the gtm attribute to the correct value when passed a number value', async () => {
    const vm = mount({
      template: '<div v-gtm="numberValue"></div>',
      directives: {
        gtm: vGtm
      },
      data:()=>({numberValue:0})
    })
    await vm.setData({'numberValue': 123})
    expect(vm.element.getAttribute('gtm')).to.equal('123')
  })

  it('sets the gtm-* attributes to the correct values when passed an object value', async () => {
    const vm = mount({
      template: '<div v-gtm="objectValue"></div>',
      directives: {
        gtm: vGtm
      },
      data:()=>({objectValue: {foo:'', bar:''}})
    })

    await vm.setData( {'objectValue': {
      foo: 'foo-value',
      bar: 'bar-value'
    }})
    expect(vm.element.getAttribute('gtm-foo')).to.equal('foo-value')
    expect(vm.element.getAttribute('gtm-bar')).to.equal('bar-value')
  })
})
