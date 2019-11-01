<template>
	<view class="w100 bg-white view-img">
		<view class="d-cc">
			<uniIcon type="contact-filled" size="150" color="#999999"></uniIcon>
		</view>
		<view class="btn-renz d-c mt-40">
			<button type="button" @click="send" class="c-white bg-main f-14">开始认证</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/m-icon/m-icon.vue";
	
		export default {
			components: {
				uniIcon
			},
			data() {
				return {
					
				}
			},
			methods: {
				send(){
					uni.navigateTo({
						url:"information-write/information-write"
					})
				}
				
			}
		}
	
</script>

<style>
.btn-renz button{
	width: 300rpx;
}
.view-img{
	padding-top: 200rpx;
}
</style>
