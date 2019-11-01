<template>
	<view class="p-box w100">
		<view class="w100 bg-white pt-20">
			<view class="f-13 d-cc w100">服务条款正文</view>
			<view class="fs-1 p-box">
				{{content}}
			</view>
			
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:''
			}
		},
		onShow() {
			this.find();
		},
		methods: {
			find(){
				const json = {
					id:1
				};
				this.post("api/open/data/findByIdTreaty",json,true)
				.then(data => {
					console.log(data);
					this.content = data.content;
				})
			}
		}
	}
</script>

<style>
@import url("../../../static/css/public.css");
</style>
