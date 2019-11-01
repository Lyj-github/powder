<!-- @author 龙渊 -->
<template>
	<view class="w100 mt-50 pl-40 pr-40">
		<view class="d-cc f-16 ">
			提现到微信
		</view>
		<view class="view-pay mt-50 f-16 pt-50 bg-white">
			<view class="   view-input  bg-white d-cc" style="height: 120rpx;">
				<view class="">提现金额:</view>
				<view class="ml-20"><input type="text" class="border input-sty bd-gray" value="" placeholder="请输入提现金额"/></view>
			</view>
			<view class="line d-bf">
				
			</view>
			<navigator url="chongzhi-success/chongzhi-success" hover-class="navigator-hover" class="mt-40">
				<button type="button" class="c-white bg-main pay-button">提现</button>
			</navigator>
		</view>	
		<view class="d-bf w100 f-16 bg-main mt-50">
			<view class=" d-cf pay-text bg-white pl-40 pr-25">
				1金豆=1元。提现小于50元直接到账，提现大于50元，需要平台审核，提现收取手续费2%，到账时间大约1个工作日，请注意查收。
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
			onNavigationBarButtonTap(e){
				// console.log("标题",e);
				uni.navigateTo({
				     url: 'tixian-record/tixian-record',
					 // console.log("标题",e)
				});
			}
		}
	}
</script>

<style>
@import url("../../../static/css/pay.css");
</style>
