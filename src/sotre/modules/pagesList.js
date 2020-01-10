import { reqpagesList, reqstaticList } from '../../api';


const state = {
    pageslist:[],
    staticlist:[]
};

const getters = {
    renderpageslist(state){
        return state.pageslist
    },
    renderstaticlist(state){
        return state.staticlist
    }
};

const mutations = {
    pagesList(state,pageslist){
        state.pageslist = pageslist
    },
    staticList(state,staticlist){
        state.staticlist = staticlist
    }
};

const actions = {
    async getPagesList(context){
        const result = await reqpagesList();
        if(result.code === 0){
            context.commit('pagesList',result.data);
        }
    },
    async getStaticList(context){
        const result = await reqstaticList();
        if(result.code === 0 ){
            context.commit('staticList',result.data);
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
