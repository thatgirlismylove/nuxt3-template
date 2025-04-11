<script setup>
import { getUserInfo } from '~/api/index.js'

getUserInfo({}).then(res => console.log(res)).catch(err => console.log(err))
</script>

<template>
	<div>
		<h1>Welcome to the homepage</h1>
		<div>
			<nuxt-link to="/about">
				<el-button type="primary">
					to about
				</el-button>
			</nuxt-link>
		</div>
	</div>
</template>
