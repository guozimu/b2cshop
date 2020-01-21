import ajax from './ajax'

// 用户信息的接口
export  const reqUserInfo = () => ajax('/userinfo');
// 产品列别的接口
export  const reqGoodsList = () => ajax('/goodslist');
// 基础数据的接口
export  const reqBasicData = () => ajax('/basicdata');
// 商品属性数据的接口
export  const reqGoodsAttr = () => ajax('/goodsattr');
// 商品属性组数据的接口
export  const reqGoodsAttrGroup = () => ajax('/goodsattrgroup');
// 商品评论组数据的接口
export  const reqCommentList = () => ajax('/commentlist');
// 订单数据的接口
export  const reqorderList = () => ajax('/orderlist');
// 应用程序的接口
export  const reqappList = () => ajax('/applist');
// pages的接口
export  const reqpagesList = () => ajax('/pageslist');
// 静态块的接口
export  const reqstaticList = () => ajax('/staticlist');
// 多语言的接口
export  const reqlangList = () => ajax('/langlist');
