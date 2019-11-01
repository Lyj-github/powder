<!-- @author 龙渊 -->
<template>
	<view class="content uni-scroll-view pos-r">
		<!-- 头部导航 -->
		<view class="navbar  mt-10 uni-scroll-view">
			<view v-for="(item, index) in navList" :key="index" class="uni-scroll-view nav-item f-16 " :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		<!-- 筛选按钮 -->
		<view class="pl-15 select-choose mt-5 f-14 bd-bottom bg-white">
			<view class="f-l mt-5">默认</view>
			<view class="f-l ml-40 pos-r">
				<view class="mt-5">价格</view>
				<view class="price-btn pos-r">
					<view class="icon-up">
						<image src="../../static/img/show_less.png" mode="" class="pos-a icon-less icon40"></image>
						<image src="../../static/img/show_down.png" mode="" class="pos-a icon-down icon40"></image>
					</view>
				</view>
			</view>
			<view class="selectView">
				<view class="f-r mr-20">
					<image src="../../static/img/select.png" mode="" class="select-img icon30 pt-15 mt-5"></image>
				</view>
				<view @click="show()" class="f-r select-text f-14">
					筛选
				</view>
				<view class="border-l bg-main f-r mr-10">
					<!-- 竖线 -->
					<view class="">
					</view>
				</view>
			</view>

		</view>
		<!-- 筛选弹框 -->
		<view id="select" class="check pos-a f-r" v-if="status==1">
			<form @submit="formSubmit" @reset="formReset">
				<view class="f-16 mt-20 ml-20">价格筛选:</view>
				<!-- 筛选框 -->
				<view class="ml-40 select mt-20 z-indexselect f-16 sellect-all">
					<view class="border select-view bg-white pos-r">
						<view class="border bg-white" @click="showSelectA">
							<view class="selected1 pos-r">
								{{ selected }}
								<view class="select-line select-imgDown pos-a">
								</view>
								<view class="select-imgDown pos-a">
									<image src="../../static/img/show_down.png" mode="" class="icon60"></image>
								</view>
							</view>
							
						</view>
						<view class="bg-white abc selected1 select-list" v-if="selectaA">
							<view @click="Myselect(index)" class="bg-white showSelectA f-16" :value="select.text" v-for="(select, index) in mySelect"
							 :key="index">{{select.text}}</view>
						</view>

					</view>
				</view>
				<view class="f-16 mt-10 ml-20 mt-30" style="z-index: -1;">任务性质:</view>
				<view class="btn-class mt-40">
					<view class="ml-50 f-14">
						<radio-group name="radio">
							<label @click="finish()">
								<radio value="finish" class="radio" checked="checked"></radio>
								<text class="radio-text" :class="{finish:isActive}">已完成</text>
							</label>
							<label @click="unfinish()">
								<radio value="unfinish" class="radio"></radio>
								<text class="radio-text" :class="{finish:isActive2}">未完成</text>
							</label>
						</radio-group>
					</view>

				</view>
				<view class="btn-last">
					<!-- <button class="f-l btn-submit f-16">确定</button>
					<button class="f-l btn-res f-16">重置</button> -->
					<button form-type="submit" class="f-l btn-submit bg-main f-16 c-white">确定</button>
					<button form-type="reset" class="f-l btn-res f-16">重置</button>
				</view>


			</form>
		</view>
		<!-- 数据显示区域 -->
		<view class="pos-r mt-10">
			<view class="user-div bg-white bd-bottom  pr-10 pt-15 pb-10" v-for="(list,index) in tableList" :key='index' @tap="openinfo(list.id)">
				<view class="user-view f-l pos-r d-c">
					<image :src="list.picUrl?list.picUrl:'../../static/img/user.jpg'" mode="" class="user-img t-c"></image>
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
			<!-- <view v-if="{{!tableList}}">
				<view>暂无数据</view>
			</view> -->
		</view>

	</view>
</template>
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
						value: 0,
						text: '建站',
						orderList: []
					},
					{
						value: 1,
						text: '求租',
						orderList: []
					},
					{
						value: 2,
						text: '设计',
						orderList: []
					},
					{
						value: 3,
						text: '注册公司',
						orderList: []
					},
					{
						value: 4,
						text: '高佣金',
						orderList: []
					}
				],
				selected: '无限',
				mySelect: [{
						value: 0,
						text: '无限'
					},
					{
						value: 1,
						text: '100元以下'
					},
					{
						value: 2,
						text: '100~2000元'
					},
					{
						value: 3,
						text: '2500~4000元'
					},
					{
						value: 4,
						text: '4000元以上'
					}
				],
				isActive: false,
				isActive2: true,
				selectaA: false,
				tableList: [],
				statuss: ['待接单', '待完成', '待审核', '已完成', '已过期', '已取消'],
			};

		},

		onLoad(options) {
			// 页面显示是默认选中第一个
			this.tabCurrentIndex = 0;
		},

		onShow() {
			this.classify(1);
			// if (uni.getStorageSync('token')) {
				this.find(1, 0);
			// }

		},

		methods: {
			changeTab(e) {
				this.tabCurrentIndex = e.target.current;
			},
			//顶部tab点击
			tabClick(index) {
				this.tabCurrentIndex = index;
				this.find(1, index);
				console.log(this.tabCurrentIndex)
			},
			show() {
				if (this.status == 1) {
					this.status = 0
				} else {
					this.status = 1
				}
			},
			finish() {
				if (this.checked = 'checked') {
					this.isActive = true;
					this.isActive2 = false;
				}

			},
			unfinish() {
				if (this.checked = 'checked') {
					this.isActive2 = true;
					this.isActive = false;
				}
			},
			classify(page) {
				this.post("api/open/data/findOpenKindPage", {
						page: page
					}, true)
					.then(data => {
						console.log(data);
						var obj = data.content;
						for (let i = 0; i < obj.length; i++) {
							this.navList[i].text = data.content[i].fwType;
							this.navList[i].value = i;
						}
					})
			},
			// 提交
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + this.isActive,
					showCancel: false
				});
			},
			formReset: function(e) {
				this.selected = this.mySelect[0].text; //重置

			},
			Myselect(i) {
				this.selected = this.mySelect[i].text;
				this.selectaA = false
			},
			showSelectA() {
				if (this.selectaA == true) {
					this.selectaA = false
				} else {
					this.selectaA = true;
				}
			},
			find(page, type) {
				let json = {
					page: page
				};
				json['map.key.type'] = type;
				this.post("api/open/task/findPage", json, true)
					.then(data => {
						let that = this;
						let table = JSON.parse(JSON.stringify(data.content)) //  ---------修改
						this.tableList = table
					})
			},
			onNavigationBarButtonTap() {
				uni.navigateTo({
					url: 'sendTask/sendTask',
					// console.log("标题",e)
				});
			},
			openinfo(id) {
				console.log(id)
				uni.navigateTo({
					url: 'renwu-details/renwu-details?id='+id,
				});
			}
		},

	};
</script>

<style lang="scss">
	@import url("../../static/css/public.css");
	@import url("../../static/css/style.css");


	// .content {
	// 	background: #FFFFFF;
	// }

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

	// .select-img {
	// 	width: 40rpx;
	// 	height: 40rpx;
	// }

	.border-l {
		width: 2px;
		height: 55rpx;
		margin-top: 6rpx;
		// background-color: #00CC99;
	}

	.navbar .nav-item {
		font-size: 14px;
	}

	// 筛选
	.select-choose{
		line-height: 50rpx;
	}
	.select-text {
		margin-top: 7rpx;
	}

	.check {
		right: 0;
		top: 160rpx;
		width: 50%;
		height: 510rpx;
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
		margin-top: 160rpx;
	}

	.icon-less {
		// height: -20rpx;
		margin-top: -15rpx;
		margin-left: 14rpx;
	}

	.icon-down {

		cursor: pointer;
		margin-top: 8rpx;
		margin-left: 14rpx;
		// transform: rotate(180deg);
		// -ms-transform: rotate(180deg);
		// /* IE 9 */
		// -webkit-transform: rotate(180deg);
		// /* Safari and Chrome */
	}

	.icon-up {
		cursor: pointer;
		margin-left: 40rpx;
		margin-top: -41rpx;
	}

	.price-btn {
		margin-left: 5rpx;
	}

	.radio {
		display: none;
	}

	.radio-text {
		padding: 7.5rpx 15rpx 7.5rpx 15rpx;
		border: 1px solid rgba($color: #000000, $alpha: 0.1);
		border-radius: 20rpx;
		margin-left: 15rpx;
		// background-color: #00CC99;
	}

	.finish {
		background-color: #79a4e1;
	}

	.btn-last button {
		border-radius: 0;
	}

	.select-view {
		border: 1px solid rgba($color: #000000, $alpha: 0.3);
	}

	.select-view view:first-child {
		// border-bottom: 0.5px solid rgba($color: #000000, $alpha: 0.3);
	}

	.z-indexselect {
		z-index: 9;
	}

	.abc {
		position: absolute;
		top: 0;

	}

	.sellect-all {
		width: 290rpx;
	}

	.selected1 {
		height: 60rpx;
		line-height: 60rpx;
		padding-left: 8rpx;
	}

	.select-list {
		margin-top: 60rpx;
		margin-left: -3rpx;
		width: 282rpx;
		height: 310rpx;
		border: 0.5px solid rgba($color: #000000, $alpha: 0.3);

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
	// select_down箭头
	.select-imgDown{
		display: flex;
		right: 0;
		top: 2rpx;
	}
	.select-line{
		margin-right: 57rpx;
		top: 0;
		width: 3rpx;
		height: 60rpx;
		border-left: 1rpx solid rgba(0,0,0,.4) ;
	}

	// .bg-c{
	// 	background-color: #F5F5F5;
	// }
</style>
