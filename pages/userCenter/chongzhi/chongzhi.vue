<!-- @author 龙渊 -->
<template>
	<view class="w100 mt-50 pl-40 pr-40">
		<view class="view-pay mt-50 f-16 pt-50 bg-white">
			<view class="   view-input  bg-white d-cc" style="height: 120rpx;">
				<view class="">充值金额:</view>
				<view class="ml-20"><input type="text" class="border input-sty bd-gray" value="" placeholder="请输入充值金额"/></view>
			</view>
			<view class="line d-bf">
				
			</view>
			<navigator url="chongzhi-success/chongzhi-success" hover-class="navigator-hover" class="mt-40">
				<button type="button" class="c-white bg-main pay-button">支付</button>
			</navigator>
		</view>	
		<view class="d-bf w100 f-16 bg-main mt-50">
			<view class=" d-cf pay-text bg-white pl-40 pr-25">
				充值的进入平台的余额将无法提现，余额用于任务发布，所有余额将会变成金豆形式存在于平台。
			</view>
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
@import url("../../../static/css/pay.css");
</style>
