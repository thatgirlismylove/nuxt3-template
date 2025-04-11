export function request(options) {
	const config = useRuntimeConfig()
	const baseUrl = config.public.apiBase
	return $fetch(`${baseUrl}${options.url}`, options)
}
