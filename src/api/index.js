import request from '../utils/request';
import ajax from './ajax'


export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
// 用户信息的接口
export  const reqUserInfo = () => ajax('/userinfo');
// 产品列别的接口
export  const reqGoodsList = () => ajax('/goodslist');
// 基础数据的接口
export  const reqBasicData = () => ajax('/basicdata');
