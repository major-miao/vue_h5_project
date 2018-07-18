module.exports = {
	//登录相关的接口
	login:{
		//获取验证码信息
		getVerifyCode:'/hibox/coupon/getVerifyCode',
        //获取优惠券
		getCoupon:'/hibox/coupon/getCoupon'
	},
	active:{
		//查询活动信息
		queryActivityInfo:'/hibox/coupon/queryActivityInfo'
	},
	share:{
		//获取微信的授权信息
		getWxConfig:'/hibox/weixin/express1/getWXJSConfig'
	}
};
