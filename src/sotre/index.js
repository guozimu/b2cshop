/*
    vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import goodsList from './modules/goodsList'
import basicData from './modules/basicData'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userInfo,
        goodsList,
        basicData
    }
})

