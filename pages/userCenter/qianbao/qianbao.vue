<!-- @author 龙渊 -->
<template>
	<view class="w100 pos-r">
		<view class=" bg-white  d-bf list-sty bd-bottom pl-20 pr-20">
			<view class="f-l">
				<view class="store-scan f-l">
					<text class="f-16">
						余额
					</text>
				</view>
				<view class="f-r icon-btn pr-20">
					<view class="">
						<text class="f-14">￥{{balance?balance:'0.00'}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class=" bg-white  d-bf list-sty bd-bottom pl-20 pr-20">
			<view class="f-l">
				<view class="store-scan f-l">
					<text class="f-16">
						团队分红
					</text>
				</view>
				<view class="f-r icon-btn pr-20">
					<view class="">
						<text class="f-14">￥{{Wallet.teamCommission?Wallet.teamCommission:'0.00'}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class=" bg-white  d-bf list-sty bd-bottom pl-20 pr-20">
			<view class="f-l">
				<view class="store-scan f-l">
					<text class="f-16">
						任务收入
					</text>
				</view>
				<view class="f-r icon-btn pr-20">
					<view class="">
						<text class="f-14">￥{{Wallet.taskIncome?Wallet.taskIncome:"0.00"}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class=" bg-white  d-bf list-sty bd-bottom pl-20 pr-20">
			<view class="f-l">
				<view class="store-scan f-l">
					<text class="f-16">
						团队分佣
					</text>
				</view>
				<view class="f-r icon-btn pr-20">
					<view class="">
						<text class="f-14">￥{{Wallet.teamCommission?Wallet.teamCommission:'0.00'}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class=" bg-white  d-bf list-sty bd-bottom pl-20 pr-20">
			<view class="f-l">
				<view class="store-scan f-l">
					<text class="f-16">
						会员收入
					</text>
				</view>
				<view class="f-r icon-btn pr-20">
					<view class="">
						<text class="f-14">￥{{Wallet.memberCommIncome?Wallet.memberCommIncome:'0.00'}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class=" bg-white  d-bf list-sty bd-bottom pl-20 pr-20">
			<view class="f-l">
				<view class="store-scan f-l">
					<text class="f-16">
						任务提成
					</text>
				</view>
				<view class="f-r icon-btn pr-20">
					<view class="">
						<text class="f-14">￥{{Wallet.taskCommission?Wallet.taskCommission:'0.00'}}</text>
					</view>
				</view>
			</view>
		</view>

		<navigator url="../chongzhi/chongzhi" hover-class="navigator-hover" class="mt-30">
			<button type="button" class="bg-main c-white t-c button-style f-16">充值</button>
		</navigator>
		<navigator url="../tixian/tixian" hover-class="navigator-hover" class="mt-15">
			<button type="button" class="c-main t-c button-style f-16">提现</button>
		</navigator>
	</view>
</template>
<script>
	import uniIcon from "@/components/m-icon/m-icon.vue";
	export default {
		data() {
			return {
				Wallet:'',
				balance:''
			}
		},
		components: {
			uniIcon
		},
		onShow() {
			if (uni.getStorageSync('token')) {
				this.getWalletInfo(1);
			}
		},
		mounted() {
			// console.log("进入页面")
			
		},
		methods:{
			getWalletInfo(page) {
				this.post("api/app/userWallets/checkWallets",{},true)
				.then(data => {
					this.Wallet = data.totalMoney;
					this.balance = data.uwBalance;
					console.log(this.Wallet.memberCommIncome)
				})
			}
		},
		onNavigationBarButtonTap(e) {
			// console.log("标题",e);
			uni.navigateTo({
				url: 'money-details/money-details',
				// console.log("标题",e)
			});
		}
	}
</script>
<style>
	@import url("../../../static/css/public.css");

	.button-style {
		width: 40%;
		/* height: 80rpx; */
	}

	.list-sty {
		height: 120rpx;
	}
</style>
