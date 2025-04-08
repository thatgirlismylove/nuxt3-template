// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		// 页面跳转过渡动画
		pageTransition: { name: 'page', mode: 'out-in' },
		// seo 参考配置
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: '我的网站标题',
			meta: [
				{ name: 'description', content: '我的网站描述' },
				{ name: 'keywords', content: 'vue,react,node,go' },
				{ name: 'charset', content: 'utf-8' },
			],
			link: [],
			style: [],
			script: [],
		},
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	runtimeConfig: {
		// 只能用于服务端的key，使用时需要判断是否在服务端环境中
		apiSecret: '',
		// 公共配置
		public: {
			// 接口域名
			apiBase: process.env.PUBLIC_API_BASE,
		},
	},
	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxt/scripts",
		"@unocss/nuxt",
		"@element-plus/nuxt",
		"@pinia/nuxt",
	],
	eslint: {
		config: {
			standalone: false
		}
	},
	css: ['~/styles/index.scss', '@unocss/reset/tailwind-compat.css'],
	postcss: {
		// postcss 插件配置，需要安装对应的依赖
		plugins: {
			// 'postcss-pxtorem': {
			//     rootValue: 16, // 根元素字体大小 (1rem = 16px)
			//     propList: ['*'], // 需要转换的属性，* 表示所有属性都转化
			//     unitPrecision: 5, // 保留小数点后 5 位
			//     selectorBlackList: [], // 忽略的选择器，例如 ['.ignore']
			//     replace: true, // 替换规则，而不是添加回退
			//     mediaQuery: false, // 是否允许在媒体查询中转换 px
			//     minPixelValue: 0, // 小于或等于这个值的 px 不会被转换
			// },
		},
	},
	unocss: {
		nuxtLayers: true,
	},
	elementPlus: {
		importStyle: 'scss',
	},
	vite: {
		css: {
			// 在 scss 文件中注入变量
			preprocessorOptions: {
				scss: {
					additionalData: `@use "~/styles/element/index.scss" as element;`,
					api: 'modern-compiler',
				},
			},
		},
		vueJsx: {
			mergeProps: true,
		},
	},
})
