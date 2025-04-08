import { mergeConfigs } from '@unocss/core';
import { presetWind } from 'unocss'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
	// your overrides
	presets: [
		presetWind(),
	],
}]);
