<!-- @author 龙渊  -->
<template>
	<view class="content pt-50">
		<view class="input-group f-16">
			<view class="input-row border">
				<text class="title f-16">手机号：</text>
				<input class="phoneinput t-l" type="text" clearable focus v-model="phoneMumber" placeholder="请输入手机号"></input>
				<view @click="code" class="c-theme mt-25 ml-40 f-12" style="width: 180rpx;">
					<!-- 发送验证码 -->
					{{phonetext}}
				</view>
			</view>
			<view class="input-row border">
				<text class="title f-16">验证码：</text>
				<input type="text" class="phoneinput t-l" displayable v-model="phoneCode" placeholder="请输入手机验证码"></input>
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<input type="password" class="phoneinput t-l" displayable v-model="password" placeholder="请输入密码"></input>
			</view>
		</view>
		<!-- 发送验证码 -->
		<view class="btn-row">
			<button type="primary" class="button bg-main" @tap="register">注册</button>
		</view>
		<lausirCodeDialog :show="showCodeDialog" :len="4" :autoCountdown="true" :phone="phoneMumber" v-on:change="change"></lausirCodeDialog>
		<!-- </view> -->

		<view class="action-row mt-30 f-14">
			<navigator url="../login/login">账号密码登录</navigator>
			<text>|</text>
			<navigator url="../pwd/pwd">忘记密码</navigator>
		</view>
	</view>
</template>



<!-- 手机验证码验证 -->
<script>
	import lausirCodeDialog from '../../components/lausir-codedialog/lausir-codedialog.vue'; //验证
	export default {
		components: {
			lausirCodeDialog,
		},
		data() {
			return {
				showCodeDialog: false,
				phoneMumber: '',
				yzm: "",
				phonetext: '获取验证码',
				password: '',
				zz: '',
				phone: '',
				phoneCode: ''

			}
		},
		onLoad() {

		},
		methods: {
			register() {
				// if (!(/^1[34578]\d{9}$/.test(this.phoneMumber))) {
				// 	this.noneToast("请输入正确的手机号码") //手机号码格式验证
				// 	return false;
				// }
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}

				const json = {
					loginName: this.phoneMumber,
					password: this.password,
					code: this.phoneCode,
					// phone: this.phoneMumber,
					// code:'123456',
					uType: 500,
					loginType: 0
					// email: this.email
				};
				this.post("api/open/common/register", json, true)
					.then(data => {
						console.log(data);
						uni.showToast({
							title: '注册成功'
						});
						uni.navigateTo({
							url:"../login/login"
						})
						
					})
			// return	
				uni.navigateBack({
					delta: 1
				});
			},
			MyPhoneMumber() {
				this.mumberDown = 60
			},
			change: function(res) {
				if (res.type == 1) {
					this.code = res.code;
					this.showCodeDialog = false;
					let json = {
						phone: this.phoneMumber,
						code: this.code,
						uType: 500,
						loginType: 0
					};
					this.post("api/open/common/postVerficationCode", json, true)
						.then(data => {
							console.log(data);
						})
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
			},
			// //获取验证码
			code() {
				let json = {
					phone: this.phoneMumber
				};
				if (!(/^1[34578]\d{9}$/.test(this.phoneMumber))) {
					this.noneToast("请输入正确的手机号码") //手机号码格式验证
					return false;
				}
				if (this.phonetext) {
					this.post("api/open/common/postVerficationCode", json, true)
						.then(data => {
							console.log(data);
							let i = 59;
							var times = setInterval(() => {
								if (i > 0) {
									// this.yzm = '重新发送(' + i + 's)';
									this.phonetext = '重新发送(' + i + 's)';
									i--;
								} else {
									// this.yzm = '重新发送';
									this.phonetext = '重新发送';
								}
							}, 1000)
						})
				}
			},


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

	.phoneinput {
		margin-top: 16rpx;
	}
</style>
