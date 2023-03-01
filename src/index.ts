import type { App, Plugin, DirectiveBinding, Ref, FunctionDirective } from 'vue'
import { unref } from 'vue'

export type vDataOptions = {
  enable?: boolean,
  prefix?: string
}

let _enable = true
let _prefix = 'data'

type BasicBinding = { [key: string]: string | number | Ref<string | number> } | string | number | Ref<string | number>

type BindingType = DirectiveBinding<BasicBinding | Ref<BasicBinding>>

const useAttrData = (options: vDataOptions = { enable: _enable, prefix: _prefix }) :FunctionDirective<HTMLElement, BindingType> => {
  const { enable = _enable, prefix = _prefix } = options

  return (el, binding) => {
    if (!enable) return

    const prefixKey = binding.arg || prefix || _prefix
    const bindingValue = unref(binding.value)
    if (typeof bindingValue === 'string') {
      el.setAttribute(prefixKey, bindingValue)
    } else if (typeof bindingValue === 'number') {
      el.setAttribute(prefixKey, bindingValue)
    } else if (typeof bindingValue === 'object') {
      Object.keys(bindingValue).forEach(value => {
        const data = unref(bindingValue[value as keyof BasicBinding])
        el.setAttribute(`${prefixKey}-${value}`, data)
      })
    }
  }
}

const vAttrData = useAttrData()

export {
  useAttrData,
  vAttrData,
}

export default {
  install: (app: App, options: vDataOptions = {}) => {
    _enable = options.enable || _enable
    _prefix = options.prefix || _prefix
    app.directive('attr-data', vAttrData)
  },
} as Plugin
