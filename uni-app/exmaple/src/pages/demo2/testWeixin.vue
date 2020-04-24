<template>
	<view>
		<view class="uni-common-mt" style="text-align: center;">
			<van-button type="primary" @click="onClick">vant按钮组件</van-button>
		</view>
		<view class="uni-common-mt" style="text-align: center;">
	        <mp-searchbar @selectresult="selectResult" :search="search"></mp-searchbar>
	    </view>
	</view>
</template>
<script>
	export default {
		data() {
			console.log(this)
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
			},
			search: function (value) {
		        return new Promise((resolve, reject) => {
		            setTimeout(() => {
		                resolve([{text: '搜索结果1', value: 1}, {text: '搜索结果2', value: 2}])
		            }, 200)
		        })
		    },
		    selectResult: function (e) {
		        console.log('select result', e.detail)
		    }
		}
	}
</script>
<style>

</style>