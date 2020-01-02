
import { reqGoodsAttrGroup } from '../../api';

const state = {
    goodsattrgroup:[],
};
const getters = {
    rendergoodsattrgroup(){
        return state.goodsattrgroup
    }
};
const mutations = {
    goodsattrgroup(state,goodsattrgroup){
        state.goodsattrgroup = goodsattrgroup;
    }
};
const actions = {
    async getGoodsAttrGroup(context){
        const result = await reqGoodsAttrGroup();
        if(result.code === 0){
            context.commit('goodsattrgroup',result.data);
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
