import { reqorderList } from '../../api';


const state = {
    orderlist:[]
};

const getters = {
    renderOrderList(state){
        return state.orderlist;
    }
};

const mutations = {
    orderList(state,orderlist){
        state.orderlist = orderlist;
    }
};

const actions = {
    async getOrderList(context){
        const result = await reqorderList();
        if(result.code === 0){
            context.commit('orderList',result.data)
        }
    }
};

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
