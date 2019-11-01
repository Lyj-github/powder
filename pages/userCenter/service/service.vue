<template>
	<view class="p-box bg-white w100">
		<view class="p-box w100 f-16">
			<view class="mt-40">客服电话:<text class="ml-10">{{message[0].customerPhone}}</text></view>
			<view class="mt-40">平台电话:<text class="ml-10">{{message[0].platformPhone}}</text></view>
			<view class="mt-40">客服微信:<text class="ml-10">{{message[0].customerWechat}}</text></view>
			<view class="mt-40">客服QQ:<text class="ml-10">{{message[0].customerQq}}</text></view>
		</view>
		<view class="mt-40 f-15 pl-10 pr-10 w100">
			<view>在线留言：</view>
			<input class="border-b mt-10 p10" value="" />
			<button value='提交' class="bg-main c-white mt-30">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				message:[]
			}
		},
		onShow(){
			this.find(1);
		},
		methods: {
			find(page){
				var json = {
					page:page
				};
				this.post("api/open/data/findCustoserPage",json,true)
				.then( data=> {
					console.log(data);
					this.message = data.content;
				})
			}
		}
	}
</script>

<style>
 .border-b{
	 border-radius: 5rpx;
	 border: #ccc solid 2rpx;
 }
</style>
