import { reqCommentList } from '../../api';


const state = {
    commentlist:[]
};

const getters = {
    renderCommentList(state){
        return state.commentlist
    }
};

const mutations = {
    commentList(state,commentlist){
        state.commentlist = commentlist
    }
};

const actions = {
    async getCommentList(context){
        const result = await reqCommentList();
        if(result.code === 0){
            context.commit('commentList',result.data)
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
