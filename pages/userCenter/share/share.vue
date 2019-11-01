<template>
	<view class="w100 pos-r">
		<view>
			<view class="userdiv d-bf bg-white">
				<view class="userdiv-l">
					<view class="d-cc">
						<image src="。" mode="" class="user-img t-c"></image>
					</view>
				</view>
				<view class="userdiv-r f-16">
					<view class="">
						<view class=" f-all fw-b"><text>名称:</text><text>angerla</text><text class="ml-10 bd-gray dengji c-tl f-all f-12 pl-5 pr-5"
							 style="font-size: 6rpx;">v1</text></view>
						<view class=" f-all">邮箱：18956196@qq.com</view>
						<view class=" f-all">手机：13549454618</view>
					</view>
				</view>
				<view class="f-r icon-btn pr-10">
					<uniIcon type="arrowright" size="20"></uniIcon>
				</view>
			</view>
		</view>
		<navigator url="" class=" w100">
			<view class="d-bf deposit pl-30 mt-15 pr-30 pt-20 pb-20 bg-white">
				<view class="">
					<view class="f-14">可提现佣金</view>
					<view class="f-18 mt-15 ">1888元</view>
				</view>
				<navigator url="../tixian/tixian" class="">
					<button type="buttom" class="f-14 c-white bg-main">我要提现</button>
				</navigator>
			</view>

		</navigator>
		<view class="view-list d-bf pl-30 mt-15 pr-30 pt-20 pb-20 bg-white f-14">
			<view class="p-l t-c">
				<view class="">已提现佣金</view>
				<view class="mt-10">18888元</view>
			</view>
			<view class="view-line"></view>
			<view class="p-r t-c">
				<view class="">未结算佣金</view>
				<view class="mt-10">18888</view>
			</view>
		</view>
		<!-- list1 -->
		<view class="list1 d-bf bg-white mt-25">
			<navigator url="distributionCommission/distributionCommission" class="viewImg d-cc bd-b bd-r">
				<view class="">
					<image src="../../../static/img/renwu.png" mode=""></image>
				<view class="">
					分销佣金
				</view>
				</view>
			</navigator>
			<view class="viewImg d-cc bd-b bd-r">
				<view class="">
					<image src="../../../static/img/renwu.png" mode=""></image>
				<view class="">
					分销订单
				</view>
				</view>
			</view>
			<view class="viewImg d-cc bd-b">
				<view class="">
					<image src="../../../static/img/renwu.png" mode=""></image>
				<view class="">
					提现明细
				</view>
				</view>
			</view>
		</view>
		<!-- list2 -->
		<view class="list1 d-bf bg-white">
			<navigator url="deposit-rules/deposit-rules" class="viewImg d-cc bd-r">
				<view class="">
					<image src="../../../static/img/renwu.png" mode=""></image>
				<view class="">
					提现规则
				</view>
				</view>
			</navigator>
			<view class="viewImg d-cc bd-r">
				<view class="">
					<image src="../../../static/img/renwu.png" mode=""></image>
				<view class="">
					专属二维码
				</view>
				</view>
			</view>
			<view class="viewImg d-cc">
				<view class="">
					<image src="../../../static/img/renwu.png" mode=""></image>
				<view class="">
					我的下级
				</view>
				</view>
			</view>
		</view>
		
		<view class=""></view>
		<view class=""></view>

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
	@import url("../../../static/css/public.css");

	.userdiv {
		height: 200rpx;
		/* background-color: rgba(0, 204, 153, .1); */
	}

	.userdiv-l {
		width: 200rpx;
	}

	.userdiv-r {
		width: 550rpx
	}

	.deposit {
		height: 120rpx;
		/* background-color: #8F8F94; */
		border: 3rpx solid rgba(0,0,0,.1);
	}
	
	/* 提现佣金 */
	.view-list{
		height: 100rpx;
	}
	/* 竖线 */
	.view-line{
		width: 2rpx;
		height: 70rpx;
		background-color: #f1f1f1;
	}
	.p-l{
		padding-left: 80rpx;
	}
	.p-r{
		padding-right: 80rpx;
	}
	.list1{
		
		
	}
	.list1 image{
		width: 80rpx;
		height: 80rpx;
	}
	.viewImg{
		width: 250rpx;
		height: 200rpx;
	}
	.bd-b{
		border-bottom: 4rpx dashed rgba(0,0,0,.2);
	}
	.bd-r{
		border-right: 4rpx dashed rgba(0,0,0,.2);
	}
</style>
