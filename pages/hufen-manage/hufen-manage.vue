<!-- @author 龙渊 -->
<template>
	<view class="w100 pos-r">	
	<navigator url="hufen-dating/hufen-dating" hover-class="navigator-hover" class=" bg-white  d-bf  list-sty bd-bottom pl-10 mt-15 d-bf">
		<view class="f-l ">
			<view class="store-scan f-l">
				<!-- <uniIcon type="chatboxes" size="20"></uniIcon> -->
				<image src="../../static/img/fan-icon1.png" mode="" class="icon50 ml-15"></image>
			</view>
			<view class="f-l">
				<text class="f-16 ml-10 ml-15">互粉大厅</text>
			</view>
			<view class="f-r icon-btn pr-30"><uniIcon type="arrowright" size="20" class=""></uniIcon></view>
		</view>
	</navigator>
	<navigator url="hufen-renzheng/hufen-renzheng" hover-class="navigator-hover" class="mt-10 bg-white   list-sty bd-bottom pl-10 d-bf">
		<view class="f-l ">
			<view class="store-scan f-l">
				<!-- <uniIcon type="compose" size="20"></uniIcon> -->
				<image src="../../static/img/fan-icon2.png" mode="" class="icon50 ml-15"></image>
			</view>
			<view class="f-l">
				<text class="f-16 ml-10 ml-15">互粉认证</text>
			</view>
			<view class="f-r icon-btn pr-30"><uniIcon type="arrowright" size="20" class=""></uniIcon></view>
		</view>
	</navigator>
	<navigator url="Management-account/Management-account" hover-class="navigator-hover" class="bg-white   list-sty bd-bottom pl-10 d-bf">
		<view class="f-l ">
			<view class="store-scan f-l">
				<!-- <uniIcon type="checkmarkempty" size="20"></uniIcon> -->
				<image src="../../static/img/fan-icon3.png" mode="" class="icon50 ml-15"></image>
			</view>
			<view class="f-l">
				<text class="f-16 ml-10 ml-15">管理账号</text>
			</view>
			<view class="f-r icon-btn pr-30"><uniIcon type="arrowright" size="20" class=""></uniIcon></view>
		</view>
	</navigator>	
	<navigator url="hufen-rules/hufen-rules" hover-class="navigator-hover" class=" mt-10 bg-white   list-sty bd-bottom pl-10 d-bf">
		<view class="f-l ">
			<view class="store-scan f-l">
				<!-- <uniIcon type="list" size="20"></uniIcon> -->
				<image src="../../static/img/fan-icon4.png" mode="" class="icon50 ml-15"></image>
			</view>
			<view class="f-l">
				<text class="f-16 ml-10 ml-15">互粉规则</text>
			</view>
			<view class="f-r icon-btn pr-30"><uniIcon type="arrowright" size="20" class=""></uniIcon></view>
		</view>
	</navigator>
	<navigator url="#" hover-class="navigator-hover" class="mt-10 bg-white   list-sty bd-bottom pl-10 d-bf">
		<view class="f-l ">
			<view class="store-scan f-l">
				<!-- <uniIcon type="trash" size="20"></uniIcon> -->
				<image src="../../static/img/fan-icon5.png" mode="" class="icon50 ml-15"></image>
			</view>
			<view class="f-l">
				<text class="f-16 ml-10 ml-15">一键清粉</text>
			</view>
			<view class="f-r icon-btn pr-30"><uniIcon type="arrowright" size="20" class=""></uniIcon></view>
		</view>
	</navigator>
	
	</view>
</template>
<script>
	import uniIcon from "@/components/m-icon/m-icon.vue";
	export default {
	    components: {uniIcon}
	}
	
</script>
<style>	
	@import url("../../static/css/public.css");
	.btn-sty{
		height: ;
	}
	.user-div{
		height: 160rpx;
	}
	/* .suer-top-r{
	    width: 67%;
	    height: 64px;
	    padding-top: 7px;
	} */
</style>