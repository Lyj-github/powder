<template>
	<view class="w100">
		<!-- list1 -->
		<view class="d-bf deposit pl-30 mt-20 pr-30 pt-20 pb-20 bg-white">
			<view class="">
				<view class="f-14">累计佣金</view>
				<view class="f-18 mt-15">1888元</view>
			</view>
			<view class="">
				<button @click="details" type="buttom" class="f-12 bg-white bd-gray">提现明细</button>
			</view>
		</view>
		<!-- list2 -->
		<view class="d-bf deposit pl-30 mt-20 pr-30 pt-20 pb-20 bg-white">
			<view class="">
				<view class="f-14">可提现佣金</view>
			</view>
			<view class="">
				<view class="f-18 mt-15">1888元</view>
			</view>
		</view>
		<!-- list3 -->
		<view class="d-bf deposit pl-30 mt-10 pr-30 pt-20 pb-20 bg-white">
			<view class="">
				<view class="f-14">已提现佣金</view>
			</view>
			<view class="">
				<view class="f-18 mt-15">1888元</view>
			</view>
		</view>
		<!-- list4 -->
		<view class="d-bf deposit pl-30 mt-10 pr-30 pt-20 pb-20 bg-white">
			<view class="">
				<view class="f-14">未结算佣金</view>
			</view>
			<view class="">
				<view class="f-18 mt-15">1888元</view>
			</view>
		</view>
		<!-- list5 -->
		<view class="d-bf deposit pl-30 mt-10 pr-30 pt-20 pb-20 bg-white">
			<view class="">
				<view class="f-14">用户须知</view>
			</view>
			<view class="">
				<!-- <view class="f-18 mt-15">1888元</view> -->
			</view>
		</view>
		<view class="d-bf">
			<button @click="cash" type="button" class="btnSty c-white f-16">我要提现</button>
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
			cash(){
				uni.navigateTo({
					url: '../../tixian/tixian',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			details(){
				uni.navigateTo({
					url:'../commissionDetails/commissionDetails'
				})
			}
			
		}
	}
</script>

<style>
	.btnSty{
		margin-top: 80rpx;
		width: 400rpx;
		background-color: rgba(255,0,0,.55);
	}

</style>
