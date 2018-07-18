module.exports ={
   /*
	 * 参数组装的函数
	 * actionType  动作类型
	 * actionParam Action参数
	 * funcName 网页JSfunction 回调函数名称
	 * funcParam func参数 回调网页JS函数的参数
	 * desc   保留字段
	 */
    //分享
    share:{
    	actionType:"2000",
    	//{"title":"分享标题", "icon":"分享图标", "desc":"分享内容", "link":"分享链接", "smsDesc":"短信分享内容"}
    	actionParam:{}
    },
    setTitle:{
    	actionType:"2100",
        //{"callInfoList":[{"actionType":2100,"actionParam":{"title":"考试结果","menu":"完成","menuAction":"finish"}]}
    	actionParam:{}
    }

};