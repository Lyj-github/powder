<template>
	<view class="content pt-50">
		<view class="input-group f-16">
			<view class="input-row border">
				<text class="title f-16">手机号：</text>
				<input class="phoneinput t-l" type="text" clearable focus v-model="phoneMumber" placeholder="请输入手机号"></input>
				<view @click="sendMunber" class="c-theme mt-25 ml-50 f-12" style="width: 180rpx;">  <!-- 发送验证码 -->
					{{phonetext}}
				</view>
			</view>
			<view class="input-row border">
				<text class="title f-16">验证码：</text>
				<input class="phoneinput t-l" type="text" clearable focus v-model="code" placeholder="请输入收到的验证码"></input>
			</view>

		</view>
		<!-- 发送验证码 -->
		<view class="mt-50">
			<button @click="" class="bg-main c-white f-16">验证登录</button>
			<!-- <view>验证码为：{{code}}</view> -->
		</view>
		<lausirCodeDialog :show="showCodeDialog" :len="4" :autoCountdown="true" :phone="phoneMumber" v-on:change="change"></lausirCodeDialog>
		<!-- </view> -->

		<view class="action-row mt-30 f-14">
			<navigator url="../login/login">账号密码登录</navigator>
			<text>|</text>
			<navigator url="../reg/reg">注册账号</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
		<!-- <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
			</view>
		</view> -->
	</view>
</template>



<!-- 手机验证 -->
<script>
	import lausirCodeDialog from '../../components/lausir-codedialog/lausir-codedialog.vue';  //验证
	export default {
		components: {
			lausirCodeDialog,
		},
		data() {
			return {
				showCodeDialog: false,
				code: "",
				phoneMumber: '',
				phonetext:'获取验证码'
			}
		},
		onLoad() {

		},
		methods: {
			change: function(res) {
				if (res.type == 1) {
					this.code = res.code;
					this.showCodeDialog = false;
				} else if (res.type == -1) {
					this.code = "请输入验证码";
					this.showCodeDialog = false;
				} else {
					setTimeout(function() {
						res.resendCall()
					}, 3000)
				}


			},
			sendMunber: function() {
				if (!(/^1[34578]\d{9}$/.test(this.phoneMumber))) {
					this.noneToast("请输入正确的手机号码") //手机号码格式验证
					return false;
				}
				this.post("api/open/common/postVerficationCode", {
										phone: this.phoneMumber
									}, true)
									.then(data => {
										console.log(data);
									})

				this.showCodeDialog = true;
			}
		}
	}
</script>

<style>
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 20upx;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		width: 100upx;
		height: 100upx;
		border: 1upx solid #dddddd;
		border-radius: 100upx;
		margin: 0 40upx;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 60upx;
		height: 60upx;
		margin: 20upx;
	}

	/* 验证码 */
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
	.phoneinput{
		margin-top: 16rpx;
	}
</style>
