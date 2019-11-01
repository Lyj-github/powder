<!-- @author 龙渊 -->
<template>
	<view class="content uni-scroll-view">
		<!-- 头部 -->
		<view class="navbar w100 uni-scroll-view">
			<view v-for="(item, index) in navList" :key="index" class="uni-scroll-view nav-item f-14 w100" :class="{ current: tabCurrentIndex === index }"
			 @click="tabClick(index)">
				{{ item.text }}
			</view>
		</view>
		<!-- 数据显示区域 -->
		<view class="list uni-scroll-view" v-for="(item, index) in navList" :key="index" v-if="tabCurrentIndex === index">
			<view class=" pos-r mt-5">
				<view class="bg-white  d-bf list-sty bd-bottom pl-10 pd-10" v-for="(detail,index) in details" :key='index'>
					<view class="f-l">
						<view class="store-scan f-l f-14">
							<view class="">{{detail.urtMemo}}</view>
							<view class="c-999"><text>{{detail.urtCreateTime | formatDate}}</text></view>
						</view>
						<view class="f-l zhichu pt-10">
							<text class="f-14 t-c">{{urtTypes[detail.urtType]}}</text>
						</view>
						<view v-if="detail.urtType == 0" class="f-r icon-btn pr-10 c-red pt-10">-<text>{{detail.urtAmt}}</text></view>
						<view v-else class="f-r icon-btn pr-10 c-main pt-10">+<text>{{detail.urtAmt}}</text></view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from "@/components/m-icon/m-icon.vue";


	export default {
		components: {

		},
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [{
						state: 0,
						text: '余额明细',
						orderList: []
					},
					{
						state: 1,
						text: '任务收入',
						orderList: []
					},
					{
						state: 2,
						text: '团队收入',
						orderList: []
					},
					{
						state: 3,
						text: '年费收入',
						orderList: []
					},
					{
						state: 4,
						text: '分佣收入',
						orderList: []
					},
					{
						state: 5,
						text: '任务提成',
						orderList: []
					}
				],
				details:[],
				urtTypes:['支出','收入','退款'],
			};
		},
		onShow() {
			if(uni.getStorageSync('token')){
				this.getDetailInfo(1);
			}	
		},
filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
		console.log()
      }
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
				if(index == 1){
					this.getDetailInfo(1,3)
				}else if(index == 2){
					this.getDetailInfo(1,7)
				}else if(index == 3){
					this.getDetailInfo(1,8)
				}else if(index == 4){
					this.getDetailInfo(1,5)
				}else if(index == 5){
					this.getDetailInfo(1,4)
				}else{
					this.getDetailInfo(1)
				}
				
			},
			getDetailInfo(page,urtStatus){
				let json = {
					page:page,
					size:15
				};
				if(urtStatus){
					json['map.furt.urtStatus'] = urtStatus;
				}
				this.post("api/app/userWallets/findWalletRecordAll",json,true)
				.then( data=> {
					console.log(data)
					this.details = data.content;
				})
			}
		},
	};
</script>

<style lang="scss">
	@import url("../../../../static/css/public.css");

	page,
	.content {
		background: #FFFFFF;
		height: 100%;
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
	.list-sty{
		margin: 0;
	}
</style>
