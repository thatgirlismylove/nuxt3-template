// PM2 部署配置文件
module.exports = {
	apps: [
		// 参考配置
		{
			name: 'NuxtAppName',
			port: '3000',
			exec_mode: 'cluster',
			instances: 'max',
			script: './.output/server/index.mjs',
		},
	],
}
