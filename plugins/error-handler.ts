export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
		// 全局错误捕获，可用于监控
		console.log(error, instance, info)
	}
})
