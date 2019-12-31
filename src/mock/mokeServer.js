import Mock from 'mockjs'
import data from './data'


// 获取用户信息的接口
Mock.mock('/userinfo',{code:0,data:data.userinfo});
