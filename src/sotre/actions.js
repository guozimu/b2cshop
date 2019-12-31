
import {
    RECEIVE_USER_INFO
} from './mutation-types'

import {
    reqUserInfo
} from '../api'

export default {
    //action中异步获取用户信息的方法
    async getUserInfo({commit}){
        console.log("执行了....");
        const result = await reqUserInfo();
        if(result.code === 0){
            const userinfo = result.data;
            commit(RECEIVE_USER_INFO,{userinfo});
        }


    }
}
