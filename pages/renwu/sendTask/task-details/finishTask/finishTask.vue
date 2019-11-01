<!-- @author 龙渊 -->
<template>
	<view class="f-16 w100 pb-50">
		<!-- task1 -->
		<view class="d-sf textline-h pl-40 mt-30">
			<view class="line mt-15"></view>
			<text class="pl-10">任务一：</text>
		</view>
		<view class="pl-40 textline-h">上传资料：上传需要信息字段</view>
		<view class="mt-15 d-bf">
			<image src="../../../../../static/img/banner.png" mode="" class="task-img"></image>
		</view>

		<!-- task2 -->
		<view class="d-sf textline-h pl-40 mt-30">
			<view class="line mt-15"></view>
			<text class="pl-10">任务二：</text>
		</view>
		<view class="pl-40 textline-h">上传资料：上传需要信息字段</view>
		<view class="mt-15 d-bf">
			<image src="../../../../../static/img/banner.png" mode="" class="task-img"></image>
		</view>

		<!-- task3 -->
		<view class="d-sf textline-h pl-40 mt-30">
			<view class="line mt-15"></view>
			<text class="pl-10">任务三：</text>
		</view>
		<view class="pl-40 textline-h">上传资料：上传需要信息字段</view>
		<view class="mt-15 d-bf">
			<image src="../../../../../static/img/banner.png" mode="" class="task-img"></image>
		</view>
		<view class="">
			<view class="d-sf textline-h pl-40 mt-30">
				<view class="line mt-15"></view>
				<text class="pl-10">任务评价：</text>
			</view>
			<view class="d-bf view-show mt-30">
				<view class="bd-gray" :class="{bgview:list1}">容易任务</view>
				<view class="bd-gray" :class="{bgview:list2}">困难任务</view>
				<view class="bd-gray" :class="{bgview:list3}">特难任务</view>
			</view>
			<view class="text-view d-cc mt-40 mb-40">
				<text class="text-sty bd-gray">{{text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cause: true,
				text: "评论~~~~~~~~~",
				list1: true,
				list2: false,
				list3: false
			}
		},
		methods: {

		}
	}
</script>

<style>
	.line {
		width: 7rpx;
		height: 35rpx;
		background-color: #79A4E1;
	}

	.textline-h {
		line-height: 60rpx;

	}

	.task-img {
		padding: 20rpx 80rpx 0 80rpx;
		width: 590rpx;
		height: 310rpx;
	}


	/* text */
	.text-view {
		width: 750rpx;
		height: 310rpx;
	}

	.text-sty {
		width: 590rpx;
		height: 310rpx;
	}

	/* 评价show btn */
	.view-show view {
		padding: 10rpx 15rpx 10rpx 15rpx;
	}

	.view-show view:first-child {
		margin-left: 80rpx;
	}

	.view-show view:last-child {
		margin-right: 80rpx;
	}

	.bgview {
		background-color: #79a4e1;
		color: white;
	}
</style>
