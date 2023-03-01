# vAttrData Vue Plugin

A Vue.js plugin for adding data attributes to HTML elements.

## Installation

Install the package via npm:

```bash
npm install @sientech/vue-attr-data --save
```

## Usage

### Global Registration

In your Vue app's entry file, register the plugin globally:

```js
import { createApp } from 'vue'
import App from './App.vue'
import vAttrData from '@sientech/vue-attr-data'

const app = createApp(App)
app.use(vAttrData, { prefix?: 'test', enable?: true })
app.mount('#app')
```

The `MODE` option is used to determine whether to enable the plugin or not. By default, the plugin is enabled in production mode and disabled in development mode. You can override this behavior by specifying your own `MODE` value.

Once the plugin is installed, you can use the `v-gtm` directive in your Vue templates:

```html
<template>
  <div v-attr-data="{ eventName: 'button-clicked', buttonLabel: 'Buy Now' }">Buy Now</div>
</template>
```

This will add the following attributes to the element:

```html
<div test-event-name="buttonclicked" test-buttonlabel="Buy Now">Buy Now</div>
```

### Local Registration

Alternatively, you can register the directive locally in a component:

```js
import { defineComponent } from 'vue'
import { useAttrData } from '@sientech/vue-attr-data'

export default defineComponent({
  directives: {
    gtm: useAttrData(prefix: 'test', enable?: true),
  },
})
```

Then use it in the component's template:

```html
<template>
  <div v-gtm="'button-clicked'">Buy Now</div>
</template>
```

This will add the following attribute to the element:

```html
<div test="button-clicked">Buy Now</div>
```

## API

### `v-attr-data` Directive

The `v-gtm` directive accepts either a string, number or an object as its binding value.

When the binding value is a string or a number, the directive will add a `data` attribute to the element.

When the binding value is an object, the directive will add one or more `data-*` attributes to the element, based on the keys and values of the object.

## License

This plugin is released under the MIT License.
