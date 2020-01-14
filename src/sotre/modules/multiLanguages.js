import { reqlangList } from '../../api';


const state = {
    multilanguges:[]
};

const getters = {
    rendermultilanguages(state){
        return state.multilanguges
    }
};

const mutations = {
    multiLanguages(state,multilanguages){
        state.multilanguges = multilanguages
    }
};

const actions = {
    async getMultiLanguages(context){
        const result = await reqlangList();
        if(result.code === 0){
            context.commit('multiLanguages',result.data)
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
