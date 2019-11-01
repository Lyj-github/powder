<!-- @author 龙渊 -->
<template>
	<view class="w100 pos-r">
		<navigator url="./userInfo/userInfo">

			<view class="userdiv d-bf">
				<view class="userdiv-l">
					<view class="d-cc">
						<image :src='user.usPicUrl?user.usPicUrl:"../../static/img/user.jpg"' mode="" class="user-img t-c"></image>
					</view>
				</view>
				<view class="userdiv-r c-white f-16">
					<view class="">
						<view class=" f-all fw-b f-20">昵称:<text>{{user.usNickName?user.usNickName:'未设置'}}</text>
							<text class="ml-10 bd-gray dengji c-tl f-all f-12 pl-5 pr-5" style="font-size: 6rpx;">LV.1</text></view>
						<view class=" f-all">手机：{{user.usPhone?user.usPhone:'未设置'}}</view>
						<view class=" f-all">邮箱：{{user.usMailbox?user.usMailbox:'未设置'}}</view>
					</view>
				</view>
				<view class="f-r icon-btn pr-10 c-white">
					<uniIcon type="arrowright" size="20"></uniIcon>
					<!-- <image src="../../static/img/userSetting-icon.png" mode="" class="icon40"></image> -->
				</view>
			</view>
		</navigator>
		<view class="">
			<view url="qianbao/qianbao" @click="checkLogin" hover-class="navigator-hover" data-index="1" class="mt-10 bg-white d-bf list-sty bd-bottom pl-30 pt-10">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="back" size="20"></uniIcon> -->
						<image src="../../static/img/money.png" mode="" class="money-sty"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">我的钱包</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</view>
			<view class="mt-10 d-bf bg-white   list-sty bd-bottom pl-30" data-index="2">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="person" size="20"></uniIcon> -->
						<image src="../../static/img/team-icon.png" mode="" class="icon40"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">团队管理</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</view>
			<navigator url="share/share" hover-class="navigator-hover" class="bg-white  d-bf list-sty bd-bottom pl-30">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="paperplane" size="20"></uniIcon> -->
						<image src="../../static/img/share-icon.png" mode="" class="icon40"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">分享赚钱</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</navigator>
			<navigator url="#" hover-class="navigator-hover" class="bg-white   list-sty bd-bottom pl-30 d-bf">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="compose" size="20"></uniIcon> -->
						<image src="../../static/img/idcard-icon.png" mode="" class="icon40"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">实名信息</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</navigator>
			<navigator url="#" hover-class="navigator-hover" class="bg-white   list-sty bd-bottom pl-30 d-bf">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="upload" size="20"></uniIcon> -->
						<image src="../../static/img/message-icon.png" mode="" class="icon40"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">信息推送</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</navigator>
			<navigator url="service/service" hover-class="navigator-hover" class="bg-white   list-sty bd-bottom pl-30 d-bf">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="email" size="20"></uniIcon> -->
						<image src="../../static/img/help-icon.png" mode="" class="icon40"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">帮助与反馈</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</navigator>
			<navigator url="clause/clause" hover-class="navigator-hover" class="bg-white   list-sty bd-bottom pl-30 d-bf">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="list" size="20"></uniIcon> -->
						<image src="../../static/img/service-icon.png" mode="" class="icon40"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">服务条款</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</navigator>
			<navigator url="#" hover-class="navigator-hover" class="mt-10 bg-white   list-sty bd-bottom pl-30 d-bf">
				<view class="f-l ">
					<view class="store-scan f-l">
						<!-- <uniIcon type="gear-filled" size="20"></uniIcon> -->
						<image src="../../static/img/setting-icon.png" mode="" class="icon40"></image>
					</view>
					<view class="f-l">
						<text class="f-16 ml-15">设置</text>
					</view>
					<view class="f-r icon-btn pr-10">
						<uniIcon type="arrowright" size="20"></uniIcon>
					</view>
				</view>
			</navigator>
		</view>

		<view class="bg-white w100 btn-sty list-sty bd-bottom mt-10">
			<view class="f-l w100">
				<view class="t-c w100">
					<button type="button" @click="gologin()" class=" button-sty w100 bg-white c-main">{{logintext}}</button>
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

	// Vue.prototype.postToken = function(url, params = {}, isLoading = false) {
	// 	if(postToken.token=null){
	// 		console.log("token is null");
	// 		uni.navigateTo({
	// 			url: '../userCenter/userInfo/userInfo',
	// 		})
	// 	}
	// 	params["token"]= uni.getStorageSync('tolen');
	// 	return requestPromise(url, 'POST', params, isLoading)
	// };


	export default {
		components: {
			uniIcon
		},
		computed: mapState(['forcedLogin', 'postToken', 'userName']),
		data() {
			return {
				logintext: '点击登录',
				user: []
			}
		},
		onShow() {
			this.find()
		},
		onLoad() {
			if (!uni.getStorageSync('token')) {
				this.logintext = "点击登录";
				uni.showModal({
					title: '未登录',
					content: '您未登录，点击跳转登陆页面',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			} else {
				this.logintext = "退出登录";
			}

		},
		methods: {
			find() {
				console.log(uni.getStorageSync('token'));
				if (!uni.getStorageSync('token')) {
					this.logintext = "点击登录";
				} else {
					this.get("api/app/userWallets/checkWallets", {}, true)
						.then(data => {
							this.user = data.user;
						})
					this.logintext = "退出登录";
				}
			},
			gologin() {
				if (!uni.getStorageSync('token')) {
					// alert(uni.getStorageSync('token'));
					uni.navigateTo({
						url: '../login/login',
					})

				} else {
					this.showError("提示", "是否确定退出登录", data => {
						let json = {
							token: uni.getStorageSync('token')
						};
						this.post("api/app/user/cleanToken", json, true)
							.then(data => {
								console.log(data)
								uni.removeStorageSync("token");
								uni.removeStorageSync("usId");
							    this.user = '';
								this.logintext = "点击登录";
							})
					});

				}


			},
			checkLogin(){
				if (!uni.getStorageSync('token')) {
					uni.showModal({
						title: '未登录',
						content: '您未登录，需要登录后才能继续',
						/**
						 * 如果需要强制登录，不显示取消按钮
						 */
						showCancel: !this.forcedLogin,
						success: (res) => {
							if (res.confirm) {
								/**
								 * 如果需要强制登录，使用reLaunch方式
								 */
								if (this.forcedLogin) {
									uni.reLaunch({
										url: '../login/login'
									});
								} else {
									uni.navigateTo({
										url: '../login/login'
									});
								}
							}
						}
					});
				} else {
					uni.navigateTo({
						url:"qianbao/qianbao"
					})
				}
			}
		}
	}
</script>



<style>
	@import url("../../static/css/public.css");

	.userdiv {
		height: 350rpx;
		/* background-color: rgba(0, 204, 153,.1); */
		background-image: url("../../static/img/user-bg.png");
		background-size: 750rpx 350rpx;
	}

	.userdiv-l {
		width: 200rpx;
	}

	.userdiv-r {
		width: 550rpx
	}

	.icon-btn {
		margin-right: 25rpx;
	}
</style>
