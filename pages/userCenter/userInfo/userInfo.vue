<!-- 前端-郭知雯 2019/10/26 15:56:45 -->
<template>
	<view class="w100 f-16 bg-white">
		<view class="img_view d-bf pr-20 pl-20 bd-bottom" @click="upLoadImg">
			<view class="">头像</view>
			<image :src="userInfo.usPicUrl?userInfo.usPicUrl:'../../../static/img/missing-face.png'" class="icon60 radius50"
			 mode="aspectFill"></image>
		</view>
		<view class="other_view pl-20 pr-20 d-bf bd-bottom">
			<text class="">昵称</text>
			<input type="text" class="t-r" v-model="userInfo.usNickName" placeholder="请输入昵称" />
		</view>
		<view class="other_view pl-20 pr-20 d-bf bd-bottom">
			<view class="">手机号码</view>
			<navigator class="f-r h" hover-class='none'>{{userInfo.usPhone?userInfo.usPhone:'未绑定'}}</navigator>
		</view>
		<view class="other_view pl-20 pr-20 d-bf bd-bottom">
			<text class="">邮箱</text>
			<input type="text" value="" class="t-r" v-model="userInfo.usMailbox" placeholder="请输入邮箱"  />
		</view>
		<view class="other_view pl-20 pr-20 d-bf bd-bottom">
			<view class="">出生日期</view>
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker mode="date" start="1000-01-01" end="3000-01-01" @change="bindDateChange">
							<view class="uni-input">{{date?date:'未设置'}}</view>
						</picker>
					</view>
				</view>
			</view>
		</view>
		<view class="button-save d-bf">
			<button type="button" class="bg-main c-white f-14" @click="save()">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				date: '',
				logo: '',
				userInfo: {}
			}
		},
		onLoad() {
			if (!uni.getStorageSync('token')) {
				this.logintext = "点击登录";
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
									url: '../../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../../login/login'
								});
							}
						}
					}
				});
				}
		},
		created() {
			if(uni.getStorageSync('token')){
				this.getUserInfo();
			}
			// this.getDate()
		},
		methods: {
			bindDateChange: function(e) {
				console.log(e)
				this.date = e.target.value
			},
			upLoadImg() {
				// this.showActionSheet()
				// return;
				uni.chooseImage({
					count: 1,
					sourceType: ['album'], //从相册选择
					success: (res) => {
						let urls = res.tempFilePaths[0];
						this.upImg(urls, (data) => {
							this.userInfo.usPicUrl = data;
						})
					},
				})
			},
			getUserInfo() {
				this.get("api/app/userWallets/checkWallets", {}, true)
					.then(data => {
						this.userInfo = data.user;
					})
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				this.date = year + "-" + month + "-" + day;
			},
			save(){
				let json = {
					usBirthday:this.date,
					usId:this.userInfo.usId,
					usUsername:this.userInfo.usNickName,
					usPic:this.userInfo.usPicUrl,
					usMailbox:this.userInfo.usMailbox
					
				};
				this.post("api/app/user/update",json,true)
				.then(data => {
					console.log(data)
					uni.showToast({
						title: '修改成功'
					});
					})
			}
		}
	}
</script>

<style>
	.img_view {
		height: 150rpx;
	}

	.other_view {
		height: 100rpx;
		margin-top: 2rpx;
	}

	.widget__arrow {
		margin-right: 30rpx;
		width: 32rpx;
		height: 32rpx;
		float: right;
		margin-top: 34rpx;
	}
	
	
	/* 按钮 */
	.button-save{
		padding-top: 150rpx;
		bottom:120rpx;
		margin: 0 auto;
		width: 600rpx;
	}
	.button-save button{
		width: 500rpx;
	}
</style>
