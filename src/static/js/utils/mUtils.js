import {callProtogenesisFun} from '@/static/js/utils/jsBridge';
import {share} from '@/config/appApi';
/**
 *  站内分享
 */
export const innerAppShare = (actionParam) => {
	let jsonResult=share;
	jsonResult.actionParam=actionParam;
    callProtogenesisFun(jsonResult);
};
