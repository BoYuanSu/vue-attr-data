import type { App, Plugin, Directive, DirectiveBinding, Ref } from 'vue'
import { unref } from 'vue'
type _MODE = 'production' | 'development'

type vGtmOptions = {
  MODE: _MODE
}

let _mode: _MODE = 'development'

type BasicBinding = { [key: string]: string | number } | string | number
type BindingType = DirectiveBinding<BasicBinding | Ref<BasicBinding>>

const vGtm: Directive = (el: HTMLElement, binding: BindingType) => {
  if (_mode === 'production') return
  const binding_ = unref(binding.value)
  if (typeof binding_ === 'string') {
    el.setAttribute('gtm', binding_)
  } else if (typeof binding_ === 'number') {
    el.setAttribute('gtm', binding_.toString())
  } else if (typeof binding.value === 'object') {
    Object.keys(binding.value).forEach(value => {
      const data = binding_[value]
      el.setAttribute(`gtm-${value}`, data.toString())
    })
  }
}

export {
  vGtmOptions,
  vGtm,
}

export default {
  install: (app: App, options: vGtmOptions) => {
    _mode = options?.MODE || 'production'
    app.directive('gtm', vGtm)
  },
} as Plugin
