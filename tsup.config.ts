import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/**/*.ts',
    '!src/**/*.spec.*', // https://github.com/egoist/tsup/issues/590
  ],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
})
