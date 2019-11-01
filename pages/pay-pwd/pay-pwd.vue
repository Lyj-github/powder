<template>
	<view class="w100 view-all">
		<view class="pay-wiew bg-white pt-30 f-16 t-c w80 ">
			<view class="mt-25">￥1000</view>
			<view class="mt-25">互粉平台</view>
			<!-- <view class="mt-30">
				<select select-data="" class="select">
					<option select-data="" value="#">钱包支付</option>
					<option select-data="" value="#">微信支付</option>
					<option select-data="" value="#">支付宝支付</option>
				</select>
			</view> -->
			<view class=" select pos-r  d-cc mt-40 z-indexselect f-16 sellect-all">
				<view class=" select-view  pos-r">
					<view class="" @click="showSelectA">
						<view class="selected1 ml-10 d-sf">
							{{ selected }}
						</view>
						<view class="select-line select-img pos-a">
							
						</view>
						<image class="select-img pos-a" src="../../static/img/show_down.png" mode=""></image>
					</view>
						<view class="bg-white pos-a abc selected1 select-border select-list" v-if="selectaA">
							<view @click="Myselect(index)" class="ml-10 showSelectA f-16 d-sf" :value="select.text" v-for="(select, index) in mySelect" :key="index">{{select.text}}</view>
						</view>
					
				</view>
			</view>
			<view class="d-cc mt-40">
				<input type="text" value="1" class="pwd-size pwd-size1 bd-right  d-cc bd-bottom"></input>
				<input type="text" value="1" class="pwd-size bd-right d-cc bd-bottom"></input>
				<input type="text" value="1" class="pwd-size bd-right d-cc bd-bottom"></input>
				<input type="text" value="1" class="pwd-size bd-right d-cc bd-bottom"></input>
				<input type="text" value="1" class="pwd-size bd-right d-cc bd-bottom"></input>
				<input type="text" value="1" class="pwd-size bd-right d-cc bd-bottom"></input>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: '银行卡支付',
				mySelect: [{
						value: 0,
						text: '银行卡支付'
					},
					{
						value: 1,
						text: '微信支付'
					},
					{
						value: 2,
						text: '支付宝支付'
					}
				],
				isActive: false,
				isActive2: true,
				selectaA: false

			}
		},
		methods: {
			Myselect(i) {
				this.selected = this.mySelect[i].text;
				this.selectaA = false
			},
			showSelectA() {
				if (this.selectaA == true) {
					this.selectaA = false
				} else {
					this.selectaA = true;
				}
			}

		}
	}
</script>

<style>
	@import url("../../static/css/style.css");
	.pay-wiew {
		height: 440rpx;
	}
	.view-all{
		display: flex;
		justify-content: center;
		margin-top: 120rpx;
	}
	.select-view{
		/* background-color: #C8C7CC; */
		/* width: 50%; */
		border: 1rpx solid rgba(0,0,0,.4);
		width: 320rpx;
	}
	.select-border{
		margin-left: -3rpx;
		height: 124rpx;
		width: 320rpx;
		border: 1rpx solid rgba(0,0,0,.4);
	}
	.select-img{
		width: 60rpx;
		height: 60rpx;
		display: flex;
		right: 0;
		top: -12rpx;
	}
	.select-line{
		margin-right: 57rpx;
		top: 0;
		width: 1rpx;
		height: 42rpx;
		border-left: 1rpx solid rgba(0,0,0,.4) ;
	}
	.pwd-size{
		width: 80rpx;
		height: 80rpx;
		border-top: 1rpx #cccccc solid;
	}
	.pwd-size1{
		border-left: 1rpx #cccccc solid;
	}
	.z-indexselect{
		z-index: 99;
		background-color: white;
		}
</style>
