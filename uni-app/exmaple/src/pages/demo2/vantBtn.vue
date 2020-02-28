<template>
	<view>
		<view class="uni-common-mt" style="text-align: center;">
			<van-button type="primary" @click="onClick">vant按钮组件</van-button>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				checked: true
			};
		},
		methods: {
			onClick() {
				uni.showToast({
					title: "uni-app支持在微信小程序、QQ小程序端、App端、H5端引入微信小程序自定义组件。",
					mask: false,
					icon: "none",
					duration: 3000
				});
			}
		}
	}
</script>
<style>

</style>