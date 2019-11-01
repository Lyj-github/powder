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
		<view class="d-cc mt-30">
			<view class="btn-view pr-20">
				<button type="button" @click="pass()" class="f-14 bd-gray c-333 bd-gray">通过</button>
			</view>
			<view class="btn-view pl-20">
				<button type="button" class="f-14 bd-gray c-333 bd-gray" @click="pass()">不通过</button>
			</view>
		</view>
		<view class="d-cc mt-30">
			<input type="text" placeholder="填写意见原因" name="cause" class="bd-gray inputSty">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cause: true,

			}
		},
		onShow() {
			// this.find();
		},
		methods: {
			pass() {
				uni.showModal({
					title: '任务通过之后',
					content: '任务押金会自动打给完成者',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			unPass(obj) {
				console.log(obj)
				// if (this.cause == true) {
				// 	this.cause = false;
				// } else {
				// 	this.cause = true;
				// }
			},
			find(){
				const json = {};
				this.post("",json,true)
				.then(data => {
					console.log(data)
					})
			}

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

	/* button */
	.btn-view {}

	.btn-view button {
		width: 200rpx;
	}

	/* input */
	.inputSty {
		width: 590rpx;
		height: 80rpx;
	}

	.pd-b {

		padding-bottom: 120rpx;
	}
</style>
