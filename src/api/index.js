import request from '../utils/request';
import ajax from './ajax'


export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
export  const reqUserInfo = () => ajax('/userinfo');
