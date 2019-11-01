<template>
	<view class="w100 d-c view-all">
		<view class="t-c f-16 fw-b success-view bg-white">
			<view class="d-c">充值成功！</view>
			<navigator url="../../qianbao/qianbao" hover-class="navigator-hover" class="d-c mt-40">查看余额</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.success-view{
		width: 600rpx;
		height: 240rpx;
		padding-top: 100rpx;
		border: 1px solid rgba(0,0,0,0.3);
	}
	.view-all{
		margin-top: 250rpx;
	}
</style>
