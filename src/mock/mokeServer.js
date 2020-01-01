import Mock from 'mockjs'
import data from './data'


// 获取用户信息的接口
Mock.mock('/userinfo',{code:0,data:data.userinfo});
// 获取商品列表
Mock.mock('/goodslist',{code:0,data:data.goodsList});
// 基础数据的接口各种select的数据
Mock.mock('/basicdata',{code:0,data:data.basicData});
