/*
    vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import goodsList from './modules/goodsList'
import basicData from './modules/basicData'
import goodsAttr from './modules/goodsAttr'
import goodsAttrGroup from './modules/goodsAttrGroup'
import commentList from './modules/commentList'
import orderList from './modules/orderList'
import appList from './modules/appList'
import pagesList from './modules/pagesList'
import multiLanguages from './modules/multiLanguages'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        userInfo,
        goodsList,
        basicData,
        goodsAttr,
        goodsAttrGroup,
        commentList,
        orderList,
        appList,
        pagesList,
        multiLanguages
    }
})

