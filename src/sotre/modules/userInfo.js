import { reqUserInfo } from '../../api';


const state = {
    userinfo:{}
}

const getters = {
    renderuserinfo(state){ //承载变化的collects
        return state.userinfo;
    }
};

const mutations = {
    setuserinfo(state,userinfo){
        state.userinfo = userinfo
    }
}
const actions = {
    async getUserInfo(context){
        const result = await reqUserInfo();
        context.commit('setuserinfo',result.data);
    }
}
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
