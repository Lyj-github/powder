<!-- @author 龙渊 -->
<template>
	<view class="content uni-scroll-view pos-r">
		<!-- 头部导航 -->
		<view class="navbar w100 uni-scroll-view">
			<view v-for="(item, index) in navList" :key="index" class="uni-scroll-view nav-item f-10 w100" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>

		<!-- 数据显示区域 -->
		<view class="w100 pos-r">
			<!-- list1 -->
			<navigator url="../renwu-details/renwu-details" hover-class="navigator-hover" class="w100 pos-r">
				<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10" v-for="(list,index) in tableList" :key="index">
					<view class="user-view f-l pos-r d-c">
						<image src="../../../static/img/user.jpg" mode="" class="user-img t-c"></image>
					</view>
					<view class="f-l line-h">
						<view class="user-text mt-5">
							<view class="f-14 f-all fw-b"><text>{{list.taskName}}</text></view>
							<view class="f-14 f-all mt-5">{{list.taskContent}}</view>
							<view class="f-14 f-all mt-5">金豆：{{list.commissionMoney}}</view>
						</view>
						
					</view>
					<view class="pos-r">
							<view class="text-right pos-a">{{statuss[list.status]}}</view>
						</view>
				</view>
			</navigator>
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
				status: 0,
				navList: [{
						state: 0,
						text: '全部',
						orderList: []
					},
					{
						state: 1,
						text: '已完成',
						orderList: []
					},
					{
						state: 2,
						text: '未完成',
						orderList: []
					}
				],
				tableList:[],
				statuss:['待接单','待完成','待审核','已完成','已过期','已取消']
			};
		},

		onLoad(options) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
			if (uni.getStorageSync('token')) {
				this.getList(1);
			}
		},

		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				if(this.tabCurrentIndex == 1){
					this.getList(1,3)
				}
				if(this.tabCurrentIndex != 1){
					this.getList(1,0)
				}
				console.log(this.tabCurrentIndex)
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
			getList(page,state){
				const json = {
					page:page,
					usId:uni.getStorageSync('usId'),
				};
				console.log('=============================',state)
				if(state){
					json['map.key.status'] = state;
				}
				this.post("api/app/task/fbrrw",json,true)
				.then( data => {
					this.tableList = data.content;
				});
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
	@import url("../../../static/css/public.css");

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

	// 筛选
	.check {
		right: 0;
		top: 160rpx;
		width: 50%;
		height: 600rpx;
		z-index: 3;
		background-color: #F2F2F2;
	}

	.select {
		width: 85%;
		height: 70rpx;
	}

	.btn-class {
		// width: 80%;
		height: 60rpx;
	}

	.btn-y {
		width: 40%;
		// height: 15rpx;
	}

	.btn-n {
		width: 40%;
	}

	.btn-y button {
		border: 1px solid #666;
	}

	.btn-n button {
		border: 1px solid #666;
	}

	.btn-submit {
		width: 50%;
	}

	.btn-res {
		width: 50%;
	}

	.btn-res button {
		border: 0;
		border-radius: 0;
	}

	.btn-last {
		margin-top: 180rpx;
	}

	.icon-less {}

	.icon-down {
		cursor: pointer;
		margin-top: -16rpx;
		margin-left: 28rpx;
		// transform: rotate(180deg);
		// -ms-transform: rotate(180deg);
		// /* IE 9 */
		// -webkit-transform: rotate(180deg);
		// /* Safari and Chrome */
	}

	.icon-up {
		cursor: pointer;
		margin-left: 57rpx;
		margin-top: -46rpx;
	}

	.price-btn {}

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
</style>
