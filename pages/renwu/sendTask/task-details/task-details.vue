<!-- @author 龙渊 -->
<template>
	<view class="w100 f-14">
		<!-- 轮播 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper banner-size" indicator-dots="true" autoplay="autoplay" interval="5000" duration="800"
					 circular="true" indicator-color="#999" indicator-active-color="#fff">
						<swiper-item>
							<view class="swiper-item uni-bg-red">
								<img src="../../../../static/img/banner.png" alt="" class="w100 banner-size" />
							</view>
						</swiper-item>
						<swiper-item>
							<view class="swiper-item uni-bg-green">
								<img src="../../../../static/img/banner.png" alt="" class="w100 banner-size" />
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<view class="user-div bg-white bd-bottom pd-10">
			<view class="suer-top-r f-l line-h pos-r">
				<view class="user-text f-14 pl-5">
					<view class="f-all fw-b"><text>高佣金任务</text></view>
					<view class="f-all f-12 mt-10">佣金：100金豆</view>
				</view>
				<view class="pos-r ">
					<view class="text-right pos-a">未完成</view>
				</view>
			</view>
		</view>
		<view class="f-l pl-15">
			<view class="pt-5">任务要求：</view>
			<view class="pt-5">1.等级需要30级以上</view>
			<view class="pt-5">2.好友数100个</view>
			<view class="pt-5 mb-10">3.需要互加</view>
		</view>
		<!-- 图片详情 -->
		<view class="bg-white w100 img-details">
			<view class="pt-10 pl-15">
				详情介绍:
			</view>
			<view class="p20">
				<image src="../../../../static/img/banner.png" mode="" class="w100 img-sty"></image>
			</view>
			<view class="pl-20 pr-20">
				<image src="../../../../static/img/banner.png" mode="" class="w100 img-sty"></image>
			</view>
			<view class="">
				<view class="pl-25 f-16">完成详情</view>
				<view class="d-bf mt-15">
					<view class="pl-30">⊙李丽丽领取任务</view>
					<view class="">2019-6-3</view>
					<view class="pr-40">查看详情</view>
				</view>
				<view class="d-bf mt-15">
					<view class="pl-30">⊙李丽丽领取任务</view>
					<view class="">2019-6-3</view>
					<view class="pr-40">查看详情</view>
				</view>
				<view class="d-bf mt-15">
					<view class="pl-30">⊙李丽丽领取任务</view>
					<view class="">2019-6-3</view>
					<view class="pr-40">查看详情</view>
				</view>
				<view class="d-bf mt-15">
					<view class="pl-30">⊙李丽丽领取任务</view>
					<view class="">2019-6-3</view>
					<view class="pr-40">查看详情</view>
				</view>
				<view class="d-bf mt-15">
					<view class="pl-30">⊙李丽丽领取任务</view>
					<view class="">2019-6-3</view>
					<view class="pr-40">查看详情</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	// 轮播
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {}


	}
</script>
<!-- 导入公共样式 -->
<style>
	@import "../../../../static/css/public.css";

	.banner-size {
		width: 750rpx;
		height: 350rpx;
	}

	.uni-card {
		box-shadow: none;
	}

	.list-btn {
		top: 35rpx;
		right: 0;
	}

	.search-opacity {
		/* opacity: 0.5; */
	}

	.input-search {
		border: 1px solid #fff;
	}

	.text-right {
		position: absolute;
		right: -150rpx;
		top: -70rpx;
	}

	.user-div {
		height: 50px;
	}

	.img-sty {
		height: 250rpx;
	}

	.img-details {
		margin-top: 220rpx;
		padding-bottom: 60rpx;
	}

	.btn-get button {
		border-radius: 0;
	}
</style>
