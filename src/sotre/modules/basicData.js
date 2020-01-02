/*
* 各种下拉框的数据
* */
import { reqBasicData } from '../../api';


const state = {
    basicdata:{}
}

const getters = {
    renderbasicData(state){ //承载变化的collects
        return state.basicdata;
    }
};

const mutations = {
    getbasic(state,basicdata){
        state.basicdata = basicdata;
    }
}
const actions = {
    async getBasicData(context){
        const result = await reqBasicData();
        if(result.code === 0){
            context.commit('getbasic',result.data);
            localStorage.setItem("basicdata",JSON.stringify(result.data));
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
