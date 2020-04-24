<template>
	<view class="uni-container">
		<view class="uni-panel" v-for="item in lists" :key="item.url">
			<view class="uni-panel-h" @click="goDetailPage(item.url)">
				<text class="uni-panel-text">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				navigateFlag: false,
				lists: [
					{
						name: "购物车",
						url: "demo2/gwc"
					},
					{
						name: "test-vant",
						url: "demo2/testWeixin"
					}
				]
			};
		},
		methods: {
			goDetailPage(path) {
				if (this.navigateFlag) {
					return;
				}
				this.navigateFlag = true;
				uni.navigateTo({
					url: '/pages/' + path
				});
				setTimeout(() => {
					this.navigateFlag = false;
				}, 200)
			}
		}
	}
</script>

<style>
	@import '../../common/uni-nvue.css';
</style>