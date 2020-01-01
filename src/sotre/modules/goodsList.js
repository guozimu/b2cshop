import { reqGoodsList } from '../../api';


const state = {
    goodsList:[]
}

const getters = {
    getgoods(state){ //承载变化的collects
        return state.goodsList;
    }
};

const mutations = {
    goodsList(state,goodslist){
        state.goodsList = goodslist
    }
}
const actions = {
    async getGoodsList(context){
        const result = await reqGoodsList();
        if(result.code === 0){
            context.commit('goodsList',result.data);
        }

    }
}
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
