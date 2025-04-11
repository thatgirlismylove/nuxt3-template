import { request } from '~/utils/request.js'

// 模拟接口
export function getUserInfo(data) {
	return request({
		url: '/api/user',
		method: 'POST',
		body: data,
	})
}
