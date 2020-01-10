import { reqappList } from '../../api';


const state = {
    applist:[]
};

const getters = {
    renderapplist(state){
        return state.applist
    }
};

const mutations = {
    appList(state,applist){
        state.applist = applist;
    }
};

const actions = {
    async getAppList(context){
        const result = await reqappList();
        if(result.code === 0){
            context.commit('appList',result.data);
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
