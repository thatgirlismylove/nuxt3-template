// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // ...@antfu/eslint-config options
    ignores: ['node_modules', 'dist'],
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    // TypeScript and Vue are autodetected, you can also explicitly enable them:
    typescript: true,
    vue: true,
  }),
)
