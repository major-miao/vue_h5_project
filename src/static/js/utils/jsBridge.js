/**
 * H5和原生交互的JS
 * Add by:major.miao 2018-07-16
 */
const u = navigator.userAgent;
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

/*
 * 网页JS调用APP本地方法
 * Add by:major.miao 2018-07-16
 */
export const callProtogenesisFun = (actionJson) => {
  let assembleJson={};
  let assembleJsonValue=[];
  assembleJsonValue.push(actionJson);
  assembleJson.callInfoList=assembleJsonValue;
  let assembleJsonStr=JSON.stringify(assembleJson);
  if (isAndroid) {
    window.npc4fc.callAction(assembleJsonStr);
  }
  //如果是ios
  if (isiOS) {
    window.location.href = 'npc4fc://?jsonStr=' + assembleJsonStr;
  }
}
