//配置域名
export const getDomain = (actionParam) => {
  let machine;
  switch (location.hostname) {
    //TODO 第一套测试环境
    case "op-sit1.fcbox.com":
      machine = "//op-sit1.fcbox.com";
      break;
      //TODO 第二套测试环境
    case "op-sit2.fcbox.com":
      // machine = "//op-sit2.fcbox.com/dropbox";
      machine = '';
      break;
      //TODO 第三套测试环境
    case "op-sit3.fcbox.com":
      machine = "//op-sit3.fcbox.com";
      break;
      //TODO 生产环境
    case "op.fcbox.com":
      machine = "//op.fcbox.com";
      break;
      //TODO 默认本机
    default:
      // machine = '';
  }
  return machine;
};
