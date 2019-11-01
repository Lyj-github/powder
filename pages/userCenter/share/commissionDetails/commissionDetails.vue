<!-- @author 龙渊 -->
<template>
	<view class="content uni-scroll-view pos-r">
		<!-- 头部导航 -->
		<view class="navbar w100 uni-scroll-view">
			<view v-for="(item, index) in navList" :key="index" class="uni-scroll-view nav-item f-16 w100" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>

		<!-- 数据显示区域 -->
		<view class="w100 pos-r">
			<view class="list" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
				
				<!-- list1 全部佣金 -->
				<view class="user-div bg-white bd-bottom  pd-10 pt-15" v-if="seen">
					<view class="user-view f-l pos-r d-c">
						<image src="../../../../static/img/user.jpg" mode="" class="user-img t-c"></image>
					</view>
					<view class="f-l line-h">
						<view class="user-text mt-15">
							<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
							<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
							<view class="f-14 f-all mt-15">昵称：天天</view>
						</view>
					</view>
					<view class="pos-r list-btn">
						<button type="button" @click="addFriend" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
					</view>
				</view>
				<!-- list2 已申请-->
				<view class="user-div bg-white bd-bottom  pd-10 pt-15" v-if="seen2">
					<view class="user-view f-l pos-r d-c">
						<image src="../../../../static/img/user.jpg" mode="" class="user-img t-c"></image>
					</view>
					<view class="f-l line-h">
						<view class="user-text mt-15">
							<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
							<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
							<view class="f-14 f-all mt-15">昵称：天天</view>
						</view>
					</view>
					<view class="pos-r list-btn">
						<button type="button" @click="addFriend" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
					</view>
				</view>
				<!-- list3 待付款-->
				<view class="user-div bg-white bd-bottom  pd-10 pt-15" v-if="seen3">
					<view class="user-view f-l pos-r d-c">
						<image src="../../../../static/img/user.jpg" mode="" class="user-img t-c"></image>
					</view>
					<view class="f-l line-h">
						<view class="user-text mt-15">
							<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
							<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
							<view class="f-14 f-all mt-15">昵称：天天</view>
						</view>
					</view>
					<view class="pos-r list-btn">
						<button type="button" @click="addFriend" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
					</view>
				</view>
				<!-- list4 已打款-->
				<view class="user-div bg-white bd-bottom  pd-10 pt-15" v-if="seen4">
					<view class="user-view f-l pos-r d-c">
						<image src="../../../../static/img/user.jpg" mode="" class="user-img t-c"></image>
					</view>
					<view class="f-l line-h">
						<view class="user-text mt-15">
							<view class="f-14 f-all fw-b"><text>微信号:sunny</text></view>
							<!-- <view class="f-12 f-all">主要是实操下载任务，简单操作</view> -->
							<view class="f-14 f-all mt-15">昵称：天天</view>
						</view>
					</view>
					<view class="pos-r list-btn">
						<button type="button" @click="addFriend" class="c-white bg-main f-r f-10 mr-10">添加好友</button>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>
<!-- <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script> -->
<script type="text/javascript">

</script>
<script>
	import uniIcon from "@/components/m-icon/m-icon.vue";

	export default {
		components: {
			uniIcon
		},


		data() {
			return {
				tabCurrentIndex: 0,
				seen:true,
				seen2:false,
				seen3:false,
				seen4:false,
				status: 0,
				navList: [{
						state: 0,
						text: '全部佣金',
						orderList: []
					},
					{
						state: 1,
						text: '已申请',
						orderList: []
					},
					{
						state: 2,
						text: '待打款',
						orderList: []
					},
					{
						state: 3,
						text: '已打款',
						orderList: []
					}
				]
			};
		},

		onLoad(options) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
		},

		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				if(this.tabCurrentIndex==0){
					this.seen=true;
					this.seen2=false;
					this.seen3=false;
					this.seen4=false;
				}else if(this.tabCurrentIndex==1){
					this.seen=false;
					this.seen2=true;
					this.seen3=false;
					this.seen4=false;
				}else if(this.tabCurrentIndex==2){
					this.seen=false;
					this.seen2=false;
					this.seen3=true;
					this.seen4=false;
				}else{
					this.seen=false;
					this.seen2=false;
					this.seen3=false;
					this.seen4=true;
				}
			},
			show() {
				// var aa=document.getElementById("select");
				// if(aa.style.display="none"){
				// 	aa.style.display="block";
				// }else{
				// 	aa.style.display="none";
				// }
				if (this.status == 1) {
					this.status = 0
				} else {
					this.status = 1
				}
			},
			addFriend(){
				// this.showError('是否添加好友')
				this.showError("提示", "是否添加对方为好友", data => {
					// 添加好友事件
				})
				
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url: '../mytask/mytask',
				// console.log("标题",e)
			});
		},

	};
</script>

<style lang="scss">
	@import url("../../../../static/css/public.css");

	page,
	.content {
		background: #FFFFFF;
	}

	.swiper-box {
		height: 100%;
	}

	.list-scroll-content {
		height: 100%;
	}

	.navbar {
		display: flex;
		height: 40px;
		// padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);
		position: relative;
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 10px;
			color: #666666;
			position: relative;

			&.current {
				color: #3675ff;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid #3675ff;
				}
			}
		}
	}

	.uni-swiper-item {
		height: auto;
	}

	.content {
		padding: 0;
	}

	.zhichu {
		margin-left: 220rpx;
	}

	.line-h {
		line-height: 1.2;
	}

	.select-img {
		width: 50rpx;
		height: 50rpx;
	}

	.border-l {
		width: 2px;
		height: 50rpx;
		background-color: #00CC99;
	}

	.navbar .nav-item {
		font-size: 14px;
	}


	// list
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
</style>
