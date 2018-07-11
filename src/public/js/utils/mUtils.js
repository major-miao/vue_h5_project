require('@/public/js/libs/jockey');
require('@/public/js/libs/jsBridge');
/**
 *  站内分享
 */
export const innerAppShare = (viewTitle, shareTitle, content, url, imageUrl, shareID, alwayShow, afterClickBottonCallback) => {
    window.WebViewJavascriptBridge.showRightShareButton(viewTitle, shareTitle, content, url, imageUrl, shareID, alwayShow, afterClickBottonCallback);
};
