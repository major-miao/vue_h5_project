/**
 * 通用的微信分享页面
 * Add by: major.miao
 */
export const qqShare = (shareEntity, wxConfigEntity) => {
  wx.config({
    debug: !1,
    appId: wxConfigEntity.AppId,
    timestamp: wxConfigEntity.Timestamp,
    nonceStr: wxConfigEntity.NonceStr,
    signature: wxConfigEntity.Signature,
    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
  });
  wx.ready(function() {
    //朋友圈
    wx.onMenuShareTimeline({
      title: shareEntity.shareTitle,
      link: shareEntity.shareLink,
      imgUrl: shareEntity.shareImgUrl,
      trigger: function(res) {
        // console.log(res);
      },
      success: function(res) {
        // console.log(res);
      },
      cancel: function(res) {
        // console.log(res);
      },
      fail: function(res) {
        // console.log(res);
      }
    });
    //朋友
    wx.onMenuShareAppMessage({
      title: shareEntity.shareTitle,
      desc: shareEntity.shareDesc,
      link: shareEntity.shareLink,
      imgUrl: shareEntity.shareImgUrl,
      type: 'link',
      dataUrl: '',
      trigger: function(res) {
        // console.log(res);
      },
      success: function(res) {
        // console.log(res);
      },
      cancel: function(res) {
        // console.log(res);
      },
      fail: function(res) {
        // console.log(res);
      }
    });
    //QQ
    wx.onMenuShareQQ({
      title: shareEntity.shareTitle,
      desc: shareEntity.shareDesc,
      link: shareEntity.shareLink,
      imgUrl: shareEntity.shareImgUrl,
      trigger: function(res) {
        // console.log(res);
      },
      success: function(res) {
        // console.log(res);
      },
      cancel: function(res) {
        // console.log(res);
      },
      fail: function(res) {
        // console.log(res);
      }
    });
  });
  wx.error(function(res) {});
}
