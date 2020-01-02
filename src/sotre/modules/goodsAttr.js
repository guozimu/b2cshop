
import { reqGoodsAttr } from '../../api'

const state = {
    goodsattr:[],
};
const getters = {
    rendergoodsattr(){
        return state.goodsattr
    }
};
const mutations = {
    goodsattr(state,goodsattr){
        state.goodsattr = goodsattr;
    }
};
const actions = {
    async getGoodsAttr(context){
        const result = await reqGoodsAttr();
        if(result.code === 0){
            context.commit('goodsattr',result.data);
        }
    }
};
export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
}
