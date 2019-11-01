<!-- @author 龙渊 -->
<!-- 轮播 -->
<template>
	<view class="w100">
		<!-- 搜索跳转 -->
		<view class=" z-index pos-a pl-15 mt-15" @click="search">
			<view class="ml-50" style="">
				<image src="../../static/img/icon-search.png" class="pos-a ml-15 mt-15 icon40" mode=""></image>
				<view class="pl-30 radius20 input-search"></view>
			</view>
		</view>
		<!-- 轮播 -->
		<view class="">
			<view class="page-section  swiper">
				<view class="page-section-spacing ">
					<swiper class="swiper uni-padding-wrap" indicator-dots="true" autoplay="autoplay" interval="5000" duration="500" circular="true">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<img src="../../static/img/banner.png" alt="" class="banner" />
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<img src="../../static/img/banner.png" alt="" class="banner" />
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-blue">
								<img src="../../static/img/banner.png" alt="" class="banner" />
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>

		</view>
		<view class="d-cf mainTitle-view">
			<view class="main-line ml-25"></view>
			<view class="">
				<view class="f-18 main-title ml-10">互粉大厅</view>
			</view>
			
		</view>
		<!-- list -->
		<view class="pos-r">
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10">
				<view class="user-view f-l pos-r d-c">
					<image src="../../static/img/user.jpg" mode="" class="user-img t-c"></image>
				</view>
				<view class="f-l line-h">
					<view class="user-text mt-15">
						<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
						<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
						<view class="f-14 f-all mt-15">昵称：天天</view>
					</view>
				</view>
				<view class="pos-r list-btn">
					<button type="button" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
				</view>
			</view>


		</view>
	</view>

</template>

<script>
	import uniIcon from "@/components/m-icon/m-icon.vue";

	import {
		mapState
	} from 'vuex'
	// 轮播
	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onShow() {
			this.list(1);
		},
		methods: {
			search() {
				uni.navigateTo({

					url: '../search/search'
				})
			},
			list(page) {
				this.post("api/admin/user/findAll", {
						page: page
					}, true)
					.then(data => {
						console.log(data);
					})
			}
		},




	}
</script>
<!-- 导入公共样式 -->
<style>
	@import "../../static/css/public.css";
	.main-title{
		
	}
	.mainTitle-view{
		height: 80rpx;
		line-height: 30rpx;
	}
	.main-line{
		width: 6rpx;
		height: 40rpx;
		background-color: #4493ec;
	}
	.uni-padding-wrap{
		width: 750rpx;
		height: 400rpx;
	}

	.uni-card {
		box-shadow: none;
	}

	.list-btn {
		top: 35rpx;
		right: 0;
	}

	.input-search {
		border: 1px solid #fff;
		border-radius: 50rpx;
	}


	/* list */
	.uni-card {
		box-shadow: none;
	}

	.list-btn {
		top: 35rpx;
		right: 0;
	}

	.input-search {
		border: 1px solid #fff;
		border-radius: 50rpx;
	}

	.user-img {
		width: 120rpx;
		height: 120rpx;
	}
	
	.banner{
		width: 750rpx;
		height: 400rpx;
	}
</style>
